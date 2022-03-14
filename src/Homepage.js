import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {List, FAB, Portal, Provider} from 'react-native-paper';
import database from '@react-native-firebase/database';

const HomeScreen = ({navigation}) => {
  const reference = database().ref('/debts/');
  const [state, setState] = React.useState({open: false});
  const [debts, setDebts] = React.useState({});
  const onStateChange = ({open}) => setState({open});
  const {open} = state;

  useEffect(() => {
    const onValueChange = reference.on('value', snapshot => {
      let value = snapshot.val();
      setDebts(value);
    });
    // Stop listening for updates when no longer required
    return () => reference.off('value', onValueChange);
  }, []);

  function ListDebts() {
    if (Object.keys(debts).length === 0) {
      return null;
    }
    return (
      <>
        {Object.entries(debts).map(([key, value], idx) => {
          return (
            <List.Item
              title={value.name}
              description={value.desc}
              style={styles.listItem}
              onPress={() => navigation.navigate('Debts')}
              key={`${key.toString()}-${value.name}`}
            />
          );
        })}
      </>
    );
  }

  return (
    <View style={styles.listSection}>
      <ListDebts />
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'close' : 'plus'}
            actions={[
              {
                icon: 'link',
                label: 'add remote',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'folder-plus',
                label: 'Create new debts',
                onPress: () => navigation.navigate('New Debts'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
              }
            }}
          />
        </Portal>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  listSection: {
    backgroundColor: '#121212',
    flex: 1,
  },
  listItem: {
    backgroundColor: '#1F1F1F',
    borderBottomColor: '#2F2F2F',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
});

export default HomeScreen;
