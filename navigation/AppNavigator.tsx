import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from "../screens/authentication/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AuthLoadingScreen from "../screens/authentication/AuthLoadingScreen";

const AuthStack = createStackNavigator({
    AuthLoading: AuthLoadingScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    }, {
    headerMode: 'none',
    navigationOptions : {
    },
});


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Auth: AuthStack,
      Main: MainTabNavigator,
    },
      {
      initialRouteName: 'Auth',
  })
);
