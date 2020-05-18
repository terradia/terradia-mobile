import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/authentication/LoginScreen';
import RegisterScreen from '../screens/authentication/RegisterScreen';
import AuthLoadingScreen from '../screens/authentication/AuthLoadingScreen';
import LocationScreen from '../screens/location/LocationScreen';
import HomeAuthScren from '../screens/authentication/HomeAuthScreen';

const AuthStack = createStackNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Login: { screen: LoginScreen, path: 'login' },
        Register: RegisterScreen,
        Location: LocationScreen,
        HomeAuth: HomeAuthScren
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            gestureEnabled: false
        }
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            Auth: AuthStack,
            Main: MainTabNavigator
        },
        {
            initialRouteName: 'Auth'
        }
    )
);
