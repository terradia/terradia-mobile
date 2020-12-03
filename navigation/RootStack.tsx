import React, { FunctionComponent, ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Auth
import LoginScreen from "../screens/authentication/LoginScreen";
import RegisterScreen from "../screens/authentication/RegisterScreen";
import AuthLoadingScreen from "../screens/authentication/AuthLoadingScreen";
import LocationScreen from "../screens/location/LocationScreen";
import HomeAuthScreen from "../screens/authentication/HomeAuthScreen";
import AccountRecoveryScreen from "../screens/authentication/AccountRecovery";

//Search
import SearchScreen from "../screens/search/SearchScreen";

//Icons
import GrowerActive from "../assets/images/TabBarNavigation/Producteurs/active.svg";
import GrowerInactive from "../assets/images/TabBarNavigation/Producteurs/inactive.svg";
import SearchActive from "../assets/images/TabBarNavigation/Search/active.svg";
import SearchInactive from "../assets/images/TabBarNavigation/Search/inactive.svg";
import ProfileActive from "../assets/images/TabBarNavigation/Profil/active.svg";
import ProfileInactive from "../assets/images/TabBarNavigation/Profil/inactive.svg";
import OrderActive from "../assets/images/TabBarNavigation/Products/active.svg";
import OrderInactive from "../assets/images/TabBarNavigation/Products/inactive.svg";

import GrowersStack from "./GrowersStack";
import ProductScreen from "../screens/growers/ProductScreen";
import FeedbackScreen from "../screens/growers/Feedback";
import GrowersProductsScreen from "../screens/growers/GrowersProductsScreen";
import CartScreen from "../screens/cart/Cart";
import CardListSelectorScreen from "../screens/growers/CardsListSelector";
import PaymentPickerScreen from "../screens/cart/PaymentPicker";

//Profile
import WalletScreen from "../screens/profile/Wallet";
import AccountScreen from "../screens/profile/Account";
import ProfileScreen from "../screens/profile/ProfileScreen";
import CardEditorScreen from "../screens/profile/CardEditor";
import CardDisplayScreen from "../screens/profile/CardDisplay";

//Orders
import PastOrderReviewScreen from "../screens/orders/PastOrderReview";
import UpcomingOrderReviewScreen from "../screens/orders/UpcomingOrderReview";
import OrdersScreen from "../screens/orders/OrdersScreen";

import i18n from "@i18n/i18n";
import { Theme, useTheme, withTheme } from "@components/theme/Theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface Props {
    theme: Theme;
}

const RootStack: FunctionComponent<Props> = ({ theme, ...props }) => {
    const MyTabs = () => {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: theme.palette.primary,
                    style: {
                        backgroundColor: theme.palette.card.backgroundColor
                    }
                }}
            >
                <Tab.Screen
                    name={i18n.t("navigation.growers")}
                    component={GrowersStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return focused ? (
                                <GrowerActive width={25} height={25} />
                            ) : (
                                <GrowerInactive width={25} height={25} />
                            );
                        }
                    }}
                />
                <Tab.Screen
                    name={i18n.t("navigation.search")}
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return focused ? (
                                <SearchActive width={25} height={25} />
                            ) : (
                                <SearchInactive width={25} height={25} />
                            );
                        }
                    }}
                />
                <Tab.Screen
                    name={i18n.t("navigation.orders")}
                    component={OrdersScreen}
                    options={{
                        tabBarIcon: ({ focused }): ReactElement => {
                            return focused ? (
                                <OrderActive width={25} height={25} />
                            ) : (
                                <OrderInactive width={25} height={25} />
                            );
                        }
                    }}
                />
                <Tab.Screen
                    name={i18n.t("navigation.profile")}
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }): ReactElement => {
                            return focused ? (
                                <ProfileActive width={25} height={25} />
                            ) : (
                                <ProfileInactive width={25} height={25} />
                            );
                        }
                    }}
                />
            </Tab.Navigator>
        );
    };

    return (
        <Stack.Navigator initialRouteName={"AuthLoading"} headerMode={"none"}>
            {/*Auth*/}
            <Stack.Screen name={"AuthLoading"} component={AuthLoadingScreen} />
            <Stack.Screen
                options={{ gestureEnabled: false }}
                name={"Login"}
                component={LoginScreen}
            />
            <Stack.Screen
                options={{ gestureEnabled: false }}
                name={"Register"}
                component={RegisterScreen}
            />
            <Stack.Screen name={"Location"} component={LocationScreen} />
            <Stack.Screen
                options={{ gestureEnabled: false }}
                name={"HomeAuth"}
                component={HomeAuthScreen}
            />
            <Stack.Screen
                name={"AccountRecovery"}
                component={AccountRecoveryScreen}
            />
            {/*//Growers*/}
            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={{
                    header: (): ReactElement => null
                }}
            />

            <Stack.Screen name="Feedback" component={FeedbackScreen} />
            <Stack.Screen
                name="GrowersProducts"
                options={{
                    headerShown: false
                }}
                component={GrowersProductsScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="CardList" component={CardListSelectorScreen} />
            <Stack.Screen
                name="PaymentPicker"
                component={PaymentPickerScreen}
            />

            {/*Orders*/}

            <Stack.Screen
                name="PastOrderReview"
                component={PastOrderReviewScreen}
            />
            <Stack.Screen
                name="UpcomingOrderReview"
                component={UpcomingOrderReviewScreen}
            />

            {/*Profile*/}

            <Stack.Screen name="Wallet" component={WalletScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="CardEditor" component={CardEditorScreen} />
            <Stack.Screen name="CardDisplay" component={CardDisplayScreen} />

            {/*TabNavigator*/}

            <Stack.Screen
                options={{ gestureEnabled: false }}
                name={"App"}
                component={MyTabs}
            />
        </Stack.Navigator>
    );
};

export default withTheme(RootStack);
