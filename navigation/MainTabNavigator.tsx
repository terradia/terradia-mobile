import React, { ReactElement } from "react";
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
import CardListSelectorScreen from "../screens/growers/CardsListSelector";
import OrdersScreen from "../screens/orders/OrdersScreen";
import PastOrderReviewScreen from "../screens/orders/PastOrderReview";
import UpcomingOrderReviewScreen from "../screens/orders/UpcomingOrderReview";
import PaymentPickerScreen from "../screens/cart/PaymentPicker";

import GrowerActive from "../assets/images/TabBarNavigation/Producteurs/active.svg";
import GrowerInactive from "../assets/images/TabBarNavigation/Producteurs/inactive.svg";
import SearchActive from "../assets/images/TabBarNavigation/Search/active.svg";
import SearchInactive from "../assets/images/TabBarNavigation/Search/inactive.svg";
import OrderActive from "../assets/images/TabBarNavigation/Products/active.svg";
import OrderInactive from "../assets/images/TabBarNavigation/Products/inactive.svg";
import ProfileActive from "../assets/images/TabBarNavigation/Profil/active.svg";
import ProfileInactive from "../assets/images/TabBarNavigation/Profil/inactive.svg";

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
        },
        CardsListSelector: {
            screen: CardListSelectorScreen,
            path: "CardsList"
        },
        PaymentPicker: {
            screen: PaymentPickerScreen
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
        return focused ? (
            <GrowerActive width={25} height={25} />
        ) : (
            <GrowerInactive width={25} height={25} />
        );
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
        return focused ? (
            <SearchActive width={25} height={25} />
        ) : (
            <SearchInactive width={25} height={25} />
        );
    }
});

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
        Account: AccountScreen,
        Wallet: WalletScreen,
        CardEditor: CardEditorScreen,
        CardDisplay: CardDisplayScreen,
        Orders: OrdersScreen
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
        return focused ? (
            <ProfileActive width={25} height={25} />
        ) : (
            <ProfileInactive width={25} height={25} />
        );
    };
    return {
        tabBarLabel,
        tabBarIcon,
        tabBarOptions,
        tabBarVisible
    };
};

const OrdersStack = createStackNavigator(
    {
        Orders: OrdersScreen,
        PastOrderReview: PastOrderReviewScreen,
        UpcomingOrderReview: UpcomingOrderReviewScreen,
        Grower: GrowersScreen,
        GrowersProducts: {
            screen: GrowersProductsScreen
        },
        Product: {
            screen: ProductScreen
        },
        Feedback: {
            screen: FeedbackScreen
        },
        Cart: {
            screen: CartScreen
        },
        CardsListSelector: {
            screen: CardListSelectorScreen
        }
    },
    {
        headerMode: "none"
    }
);

OrdersStack.navigationOptions = ({ navigation }) => {
    const tabBarLabel = "Commandes";
    const tabBarOptions = {
        activeTintColor: "#5CC04A",
        inactiveTintColor: "#ccc"
    };
    const tabBarVisible = navigation.state.index < 1;

    const tabBarIcon = ({ focused }): ReactElement => {
        return focused ? (
            <OrderActive width={25} height={25} />
        ) : (
            <OrderInactive width={25} height={25} />
        );
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
        OrdersStack,
        ProfileStack
    },
    {}
);

export default tabNavigator;
