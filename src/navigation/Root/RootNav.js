import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from '../Stack/StackNav';
// import {View, Text} from 'react-native';

const RootNav = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default RootNav;
