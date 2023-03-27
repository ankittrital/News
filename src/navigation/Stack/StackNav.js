import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home/Home';
import BottomTab from '../BottomTab/BottomNav';
import NewsDetails from '../../screens/NewsDetails/NewsDetails';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, initialRouteName: 'BottomTab'}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetails}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
