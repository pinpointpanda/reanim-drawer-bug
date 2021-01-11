/* eslint-disable prettier/prettier */
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { ScreenOne, ScreenTwo } from './Screen';

const Drawer = createDrawerNavigator();

export const AppHome = () => {
return (
  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Screen One" component={ScreenOne} />
        <Drawer.Screen name="Screen Two" component={ScreenTwo} />
      </Drawer.Navigator>
  </NavigationContainer>
)
}

