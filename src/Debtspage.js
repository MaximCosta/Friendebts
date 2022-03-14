import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {currencyFormat} from './utils';
//import database from '@react-native-firebase/database';

class Debtspage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <>
          <View style={styles.bottomBar}>
            <View style={styles.bottomIcon}>
              <IconButton
                icon="plus"
                color="white"
                style={styles.iconButton}
                size={35}
                onPress={() => console.log('Pressed')}
              />
            </View>
            <View style={styles.bottomBarLeft}>
              <Text style={styles.lText}>MON COÛT TOTAL</Text>
              <Text style={styles.lTextPrice}>{currencyFormat(733.84)}</Text>
            </View>
            <View style={styles.bottomBarRight}>
              <Text style={styles.rText}>TOTAL DÉPENSE</Text>
              <Text style={styles.rTextPrice}>{currencyFormat(4372.44)}</Text>
            </View>
          </View>
        </>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  bottomBar: {
    backgroundColor: '#262626',
    position: 'absolute',
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    bottom: 0,
    right: 0,
    left: 0,
  },
  bottomBarLeft: {
    marginLeft: 30,
    flex: 1,
  },
  bottomBarRight: {
    marginRight: 30,
  },
  lTextPrice: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
  rTextPrice: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'white',
  },
  lText: {
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  rText: {
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  bottomIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0,
    top: 0,
  },
  iconButton: {
    backgroundColor: '#A2C2E6',
  },
});

export default Debtspage;
