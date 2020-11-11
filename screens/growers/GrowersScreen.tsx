import React, { FunctionComponent, ReactElement } from "react";
import { FlatList, Animated, View, AsyncStorage } from "react-native";
import GrowerCard from "../../components/cards/GrowerCard";
import FilterGrowers from "../../components/growers/Filter";
import { NavigationStackScreenProps } from "react-navigation-stack";
import NavBar from "../../components/header/NavBar";
import { withCollapsible } from "react-navigation-collapsible";
import { LinearGradient } from "expo-linear-gradient";
import Cart from "../../components/cart";
import { useQuery } from "@apollo/react-hooks";
import getCompaniesByDistanceByCustomer from "../../graphql/getCompaniesByDistanceByCustomer.graphql";
import { CompanyData } from "@interfaces/Companies";
import DeepLinking from "@components/routing/DeepLinking";
import ProductLoader from "@components/product/content/ProductLoader";
import GrowersLoader from "@components/growers/GrowersLoader";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

declare interface GrowersScreen {
    navigation: NavigationStackScreenProps;
    collapsible: any;
}

declare interface GetCompaniesByDistanceByCustomerData {
    getCompaniesByDistanceByCustomer: [CompanyData];
}

const GrowersScreen: FunctionComponent<GrowersScreen> = ({
    navigation,
    collapsible
}) => {
    const { data: growers } = useQuery<GetCompaniesByDistanceByCustomerData>(
        getCompaniesByDistanceByCustomer,
        {
            fetchPolicy: "cache-only"
        }
    );

    const { paddingHeight, animatedY, onScroll } = collapsible;
    if (!growers || !growers.getCompaniesByDistanceByCustomer) {
        return <GrowersLoader />;
    }
    return (
        <View style={{ flex: 1 }}>
            <AnimatedFlatList
                style={{ flex: 1 }}
                data={growers.getCompaniesByDistanceByCustomer}
                renderItem={({ item }): ReactElement => (
                    <GrowerCard navigation={navigation} grower={item} />
                )}
                keyExtractor={(item, index): string => String(index)}
                contentContainerStyle={{ paddingTop: paddingHeight }}
                scrollIndicatorInsets={{ top: paddingHeight }}
                _mustAddThis={animatedY}
                onScroll={onScroll}
            />
            <Cart />
            <DeepLinking />
        </View>
    );
};

const collapsibleParams = {
    collapsibleComponent: FilterGrowers,
    collapsibleBackgroundStyle: {
        height: 48,
        backgroundColor: "white"
    }
};

// @ts-ignore
GrowersScreen.navigationOptions = {
    headerTitle: (): ReactElement => <NavBar />,
    headerBackground: (): ReactElement => (
        <LinearGradient
            style={{ flex: 1, height: 80 }}
            colors={["#8FDD3D", "#5CC04A"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        />
    ),
    headerStyle: { height: 80, backgroundColor: "transparent" }
};

export default withCollapsible(GrowersScreen, collapsibleParams);
