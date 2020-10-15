import React, { FunctionComponent } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import HeaderAccount from "@components/account/Header";
const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

const initialLayout = { width: Dimensions.get("window").width };

const Orders: FunctionComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "En cours" },
        { key: "second", title: "Historique" }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute
    });

    return (
        <View style={{flex: 1}}>
            <HeaderAccount title={"Mes commandes"} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    scene: {
        flex: 1
    }
});
export default Orders;
