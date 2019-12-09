import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import ProductsScreen from '../screens/ProductsScreen';
import GrowersScreen from '../screens/GrowersScreen';
import ProfileScreen from '../screens/ProfileScreen';


const ProductStack = createStackNavigator(
    {
        Product: ProductsScreen,
    }
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


const GrowerStack = createStackNavigator(
    {
        Grower: GrowersScreen,
    }
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


const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    }
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


const tabNavigator = createBottomTabNavigator({
    ProductStack,
    GrowerStack,
    ProfileStack,
});


export default tabNavigator;
