import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './Homepage';
import Debtspage from './Debtspage';

const NewDebts = ({navigation}) => {
  return <Text>Créer une nouvelle page</Text>;
};
const Settings = ({navigation}) => {
  return <Text>Settings de la page home</Text>;
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function DebtsStack({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#272727'},
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {borderWidth: 1, borderColor: '#E7AC04'},
        tabBarPressColor: '#fff',
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen name="Debts_page" component={Debtspage} />
      <Tab.Screen name="Debts_graph" component={Debtspage} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#272727'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Friend'ebts"}}
        />
        <Stack.Screen name="Debts" component={DebtsStack} />
        <Stack.Screen name="New Debts" component={NewDebts} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
