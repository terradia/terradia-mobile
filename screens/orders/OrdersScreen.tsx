import React, { FunctionComponent, ReactElement } from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import styles from "./styles/Orders.style";
import UpcomingList from "@components/orders/upcoming/UpcomingList";
import PastList from "@components/orders/past/PastList";

import MainHeader from "@components/theme/MainHeader";
import { ThemedBox, ThemedContainer } from "@components/theme/Theme";
import Cart from "@components/cart";
import i18n from "@i18n/i18n";

const initialLayout = { width: Dimensions.get("window").width };

const OrdersScreen: FunctionComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: i18n.t("orders.current") },
        { key: "second", title: i18n.t("orders.past") }
    ]);

    const renderScene = SceneMap({
        first: UpcomingList,
        second: PastList
    });
    const renderTabBar = props => (
        <ThemedBox>
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: "#5CC04A" }}
                style={{
                    backgroundColor: "transparent",
                    shadowRadius: 10
                }}
                renderLabel={({ route, focused }): ReactElement => {
                    return focused ? (
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.textRouteFocused}>
                                {route.title}
                            </Text>
                        </View>
                    ) : (
                        <Text style={styles.textNotFocused}>{route.title}</Text>
                    );
                }}
            />
        </ThemedBox>
    );
    return (
        <ThemedContainer style={{ flex: 1 }}>
            <MainHeader
                title={i18n.t("profileScreen.myOrders")}
                backButton={false}
            />
            <TabView
                navigationState={{ index, routes }}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
            <Cart />
        </ThemedContainer>
    );
};
export default OrdersScreen;
