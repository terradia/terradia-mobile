import React, { FunctionComponent, ReactElement, useState } from "react";
import { FlatList, Animated, View, RefreshControl } from "react-native";
import GrowerCard from "../../components/cards/GrowerCard";
import { NavigationStackScreenProps } from "react-navigation-stack";
import Cart from "../../components/cart";
import { useQuery } from "@apollo/react-hooks";
import getCompaniesByDistanceByCustomer from "../../graphql/getCompaniesByDistanceByCustomer.graphql";
import { CompanyData } from "@interfaces/Companies";
import DeepLinking from "@components/routing/DeepLinking";
import CardListLoader from "@components/growers/CardListLoader";
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import HeaderFooter from "@components/header/HeaderFooter";
import { ThemedBox, ThemedContainer } from "@components/theme/Theme";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

declare interface GrowersScreen {
    navigation: NavigationStackScreenProps;
    collapsible: any;
}

declare interface GetCompaniesByDistanceByCustomerData {
    getCompaniesByDistanceByCustomer: [CompanyData];
}

const GrowersScreen: FunctionComponent<GrowersScreen> = ({ navigation }) => {
    const { data: growers, refetch } = useQuery<
        GetCompaniesByDistanceByCustomerData
    >(getCompaniesByDistanceByCustomer);

    const [refreshing, setRefreshing] = useState(false);

    // const { paddingHeight, animatedY, onScroll } = collapsible;
    if (!growers || !growers.getCompaniesByDistanceByCustomer) {
        return <CardListLoader />;
    }
    return (
        <ThemedContainer style={{ flex: 1 }}>
            <HeaderFooter />
            <AnimatedFlatList
                style={{ flex: 1 }}
                data={growers.getCompaniesByDistanceByCustomer}
                renderItem={({ item }): ReactElement => (
                    <GrowerCard navigation={navigation} grower={item} />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={(): void => {
                            setRefreshing(true);
                            refetch().then(() => setRefreshing(false));
                        }}
                    />
                }
                keyExtractor={(item, index): string => String(index)}
                contentContainerStyle={{ paddingTop: calcWidth(0) }}
                scrollIndicatorInsets={{ top: calcWidth(0) }}
            />
            <Cart />
            <DeepLinking />
        </ThemedContainer>
    );
};

// @ts-ignore
// GrowersScreen.navigationOptions = {
//     headerTitle: (): ReactElement => <NavBar />,
//     headerBackground: (): ReactElement => (
//         <LinearGradient
//             style={{ flex: 1, height: 80 }}
//             colors={["#8FDD3D", "#5CC04A"]}
//             start={{ x: 0, y: 1 }}
//             end={{ x: 1, y: 0 }}
//         />
//     ),
//     headerStyle: { height: 80, backgroundColor: "transparent" }
// };

// export default withCollapsible(GrowersScreen, collapsibleParams);
export default GrowersScreen;
