import React, { ReactNode } from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ProductsScreen from '../screens/ProductsScreen';
import GrowersScreen from '../screens/growers/GrowersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GrowersProductsScreen from '../screens/growers/GrowersProductsScreen';
import { createStackNavigator } from 'react-navigation-stack';
import NavBar from '../components/header/NavBar';

const GrowerStack = createStackNavigator(
    {
        Grower: GrowersScreen,
        GrowersProducts: {
            screen: GrowersProductsScreen
        }
    },
    {
        headerMode: 'screen'
    }
);

GrowerStack.navigationOptions = {
    tabBarLabel: 'Producteurs',
    tabBarOptions: {
        activeTintColor: '#5CC04A',
        inactiveTintColor: '#ccc'
    },
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? require('../assets/images/TabBarNavigation/Producteurs/active.png')
            : require('../assets/images/TabBarNavigation/Producteurs/inactive.png');
        return <Image source={image} />;
    }
};

const ProductStack = createStackNavigator(
    {
        Product: ProductsScreen
    },
    {
        headerMode: 'none'
    }
);

ProductStack.navigationOptions = {
    tabBarLabel: 'Produits',
    header: null,
    tabBarOptions: {
        activeTintColor: '#5CC04A',
        inactiveTintColor: '#ccc'
    },
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? require('../assets/images/TabBarNavigation/Products/active.png')
            : require('../assets/images/TabBarNavigation/Products/inactive.png');
        return <Image source={image} />;
    }
};

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen
    },
    {
        headerMode: 'none'
    }
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profil',
    tabBarOptions: {
        activeTintColor: '#5CC04A',
        inactiveTintColor: '#ccc'
    },
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? require('../assets/images/TabBarNavigation/Profil/active.png')
            : require('../assets/images/TabBarNavigation/Profil/inactive.png');
        return <Image source={image} />;
    }
};

const tabNavigator = createBottomTabNavigator(
    {
        GrowerStack,
        ProductStack,
        ProfileStack
    },
    {}
);

export default tabNavigator;
