import React, { FunctionComponent, ReactElement } from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import styles from "./styles/Orders.style";
import UpcomingList from "@components/orders/upcoming/UpcomingList";
import PastList from "@components/orders/past/PastList";

import HeaderAccount from "@components/account/Header";

const initialLayout = { width: Dimensions.get("window").width };

const Orders: FunctionComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "En cours" },
        { key: "second", title: "Passées" }
    ]);

    const renderScene = SceneMap({
        first: UpcomingList,
        second: PastList
    });
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#5CC04A" }}
            style={{
                backgroundColor: "transparent"
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
    );
    return (
        <View style={{ flex: 1 }}>
            <HeaderAccount title={"Mes commandes"} backButton={false} />
            <TabView
                navigationState={{ index, routes }}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>
    );
};
export default Orders;
