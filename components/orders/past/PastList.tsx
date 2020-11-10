import React, { FunctionComponent, ReactElement, useState } from "react";
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    RefreshControl
} from "react-native";
import PastCardHeader from "./PastCardHeader";
import { useNavigation } from "react-navigation-hooks";
import { useQuery } from "@apollo/react-hooks";
import getMyOrderHistories from "../../../graphql/orders/getMyOrderHistories.graphql";
import { OrderData, OrderHistoryData } from "@interfaces/Orders";
import styles from "@components/orders/upcoming/styles/UpcomingList.style";
import Cart from "../../../assets/svg/cart.svg";
import i18n from "@i18n/i18n";
import GrowersLoader from "@components/growers/GrowersLoader";

interface GetMyOrdersHistoriesData {
    getMyOrderHistories: [OrderHistoryData];
}

const PastList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const { data: orders, refetch } = useQuery<GetMyOrdersHistoriesData>(
        getMyOrderHistories
    );

    if (!orders) {
        return <GrowersLoader />;
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={orders && orders.getMyOrderHistories}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={(): void => {
                            refetch();
                        }}
                    />
                }
                renderItem={({ item }): ReactElement => (
                    <PastCardHeader order={item} />
                )}
                ListEmptyComponent={(): ReactElement => (
                    <View style={[styles.emptyContainer, styles.shadow1]}>
                        <Cart />
                        <Text style={styles.youHaveNoOrderText}>
                            {i18n.t("orders.youHaveNoOrderHistory")}
                        </Text>
                        <TouchableOpacity
                            style={styles.discoverProducersContainer}
                            onPress={(): boolean => navigate("Grower")}
                        >
                            <Text style={styles.discoverProducersText}>
                                {i18n.t("orders.discoverProducers")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default PastList;
