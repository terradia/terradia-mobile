import React from 'react';
import {Platform, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import ProductsScreen from '../screens/ProductsScreen';
import GrowersScreen from '../screens/GrowersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const ProductStack = createStackNavigator(
    {
        Product: ProductsScreen,
    },
    config
);

ProductStack.navigationOptions = {
    tabBarLabel: 'Produits',
    tabBarOptions: {
        activeTintColor: '#5CC04A',
        inactiveTintColor: '#ccc',
    },
    tabBarIcon: ({focused}) => {
        const image = focused
            ? require('../assets/images/TabBarNavigation/Products/active.png')
            : require('../assets/images/TabBarNavigation/Products/inactive.png');
        return (
            <Image
                source={image}
            />
        )
    }
};

ProductStack.path = '';

const GrowerStack = createStackNavigator(
    {
        Grower: GrowersScreen,
    },
    config
);

GrowerStack.navigationOptions = {
    tabBarLabel: 'Producteurs',
    tabBarOptions: {
        activeTintColor: '#5CC04A',
        inactiveTintColor: '#ccc',
    },
    tabBarIcon: ({focused}) => {
        const image = focused
            ? require('../assets/images/TabBarNavigation/Producteurs/active.png')
            : require('../assets/images/TabBarNavigation/Producteurs/inactive.png');
        return (
            <Image
                source={image}
            />
        )
    }
};

GrowerStack.path = '';

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profil',
    tabBarOptions: {
        activeTintColor: '#5CC04A',
        inactiveTintColor: '#ccc',
    },
    tabBarIcon: ({focused}) => {
        const image = focused
            ? require('../assets/images/TabBarNavigation/Profil/active.png')
            : require('../assets/images/TabBarNavigation/Profil/inactive.png');
        return (
            <Image
                source={image}
            />
        )
    }
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
    ProductStack,
    GrowerStack,
    ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
