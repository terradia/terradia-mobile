import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import ProductsScreen from '../screens/ProductsScreen';
import GrowersScreen from '../screens/growers/GrowersScreen';
import ProfileScreen from '../screens/authentication/ProfileScreen';
import GrowersProductsScreen from "../screens/growers/GrowersProductsScreen";


const GrowerStack = createStackNavigator(
    {
        Grower: GrowersScreen,
        GrowersProducts: GrowersProductsScreen
    }, {
        headerMode: 'none',
    }
);

GrowerStack.navigationOptions = {
    tabBarLabel: 'Producteurs',
    header: null,
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

const ProductStack = createStackNavigator(
    {
        Product: ProductsScreen,
    }, {
        headerMode: 'none',
    }
);

ProductStack.navigationOptions = {
    tabBarLabel: 'Produits',
    header: null,
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



const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    }, {
        headerMode: 'none',
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
    GrowerStack,
    ProductStack,
    ProfileStack,
}, {
});


export default tabNavigator;
