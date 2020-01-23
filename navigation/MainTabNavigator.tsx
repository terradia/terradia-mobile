import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from '../screens/search/SearchScreen';
import GrowersScreen from '../screens/growers/GrowersScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import GrowersProductsScreen from '../screens/growers/GrowersProductsScreen';
import { createStackNavigator } from 'react-navigation-stack';
import i18n from '@i18n/i18n';

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

GrowerStack.navigationOptions = ({ navigation }) => ({
    tabBarLabel: i18n.t('growerScreen.growers'),
    tabBarOptions: {
        activeTintColor: '#5CC04A',
        inactiveTintColor: '#ccc'
    },
    tabBarVisible: navigation.state.index < 1,
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? require('../assets/images/TabBarNavigation/Producteurs/active.png')
            : require('../assets/images/TabBarNavigation/Producteurs/inactive.png');
        return <Image source={image} />;
    }
});

const SearchStack = createStackNavigator(
    {
        Product: SearchScreen
    },
    {
        headerMode: 'screen'
    }
);

SearchStack.navigationOptions = {
    tabBarLabel: i18n.t('searchScreen.search'),
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
        SearchStack,
        ProfileStack
    },
    {}
);

export default tabNavigator;
