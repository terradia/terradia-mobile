import React, { FunctionComponent, ReactElement } from "react";

import { NavigationStackScreenProps } from "react-navigation-stack";
import GrowerProducts from "@components/growersProducts";

declare interface GrowersProductsScreen {
    navigation?: NavigationStackScreenProps;
}

const GrowerProductsScreen: FunctionComponent<GrowersProductsScreen> = ({
    navigation
}) => {
    return <GrowerProducts navigation={navigation} />;
};

// @ts-ignore
GrowerProductsScreen.navigationOptions = {
    headerMode: "none",
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default GrowerProductsScreen;
