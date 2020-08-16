import React, { ReactElement } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "../screens/search/SearchScreen";
import GrowersScreen from "../screens/growers/GrowersScreen";
import ProductScreen from "../screens/growers/ProductScreen";
import FeedbackScreen from "../screens/growers/Feedback";
import ProfileScreen from "../screens/profile/ProfileScreen";
import CartScreen from "../screens/growers/Cart";
import AccountScreen from "../screens/profile/Account";
import WalletScreen from "../screens/profile/Wallet";
import CardEditorScreen from "../screens/profile/CardEditor";
import CardDisplayScreen from "../screens/profile/CardDisplay";
import GrowersProductsScreen from "../screens/growers/GrowersProductsScreen";
import { createStackNavigator } from "react-navigation-stack";
import i18n from "@i18n/i18n";

const GrowerStack = createStackNavigator(
    {
        Grower: GrowersScreen,
        GrowersProducts: {
            screen: GrowersProductsScreen,
            path: "products"
        },
        Product: {
            screen: ProductScreen,
            path: "product"
        },
        Feedback: {
            screen: FeedbackScreen,
            path: "feedback"
        },
        Cart: {
            screen: CartScreen,
            path: "cart"
        }
    },
    {
        headerMode: "screen"
    }
);

GrowerStack.navigationOptions = ({ navigation }) => ({
    tabBarLabel: i18n.t("growerScreen.growers"),
    path: "grower",
    tabBarOptions: {
        activeTintColor: "#5CC04A",
        inactiveTintColor: "#ccc"
    },
    tabBarVisible: navigation.state.index < 1,
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? require("../assets/images/TabBarNavigation/Producteurs/active.png")
            : require("../assets/images/TabBarNavigation/Producteurs/inactive.png");
        return <Image source={image} />;
    }
});

const SearchStack = createStackNavigator(
    {
        Search: { screen: SearchScreen, path: "search" },
        GrowersProducts: {
            screen: GrowersProductsScreen,
            path: "searchProducts"
        }
    },
    {
        headerMode: "none"
    }
);

SearchStack.navigationOptions = ({ navigation }) => ({
    tabBarLabel: i18n.t("searchScreen.search"),
    header: null,
    tabBarOptions: {
        activeTintColor: "#5CC04A",
        inactiveTintColor: "#ccc"
    },
    tabBarVisible: navigation.state.index < 1,
    tabBarIcon: ({ focused }) => {
        const image = focused
            ? require("../assets/images/TabBarNavigation/Products/active.png")
            : require("../assets/images/TabBarNavigation/Products/inactive.png");
        return <Image source={image} />;
    }
});

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
        Account: AccountScreen,
        Wallet: WalletScreen,
        CardEditor: CardEditorScreen,
        CardDisplay: CardDisplayScreen
    },
    {
        headerMode: "none"
    }
);

ProfileStack.navigationOptions = ({ navigation }) => {
    const tabBarLabel = "Profil";
    const tabBarOptions = {
        activeTintColor: "#5CC04A",
        inactiveTintColor: "#ccc"
    };
    let tabBarVisible;
    for (let i = 0; i < navigation.state.routes.length; i++) {
        if (navigation.state.routes[i].routeName === "Account") {
            tabBarVisible = false;
        }
    }
    const tabBarIcon = ({ focused }): ReactElement => {
        const image = focused
            ? require("../assets/images/TabBarNavigation/Profil/active.png")
            : require("../assets/images/TabBarNavigation/Profil/inactive.png");
        return <Image source={image} />;
    };
    return {
        tabBarLabel,
        tabBarIcon,
        tabBarOptions,
        tabBarVisible
    };
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
