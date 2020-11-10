import React, { FunctionComponent, ReactElement, useState } from "react";
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    RefreshControl
} from "react-native";
import UpcomingCardHeader from "./UpcomingCardHeader";
import { useNavigation } from "react-navigation-hooks";
import { useQuery } from "@apollo/react-hooks";
import getMyOrders from "../../../graphql/orders/getMyOrders.graphql";
import { OrderData } from "@interfaces/Orders";
import Cart from "../../../assets/svg/cart.svg";
import styles from "./styles/UpcomingList.style";
import i18n from "@i18n/i18n";
import GrowersLoader from "@components/growers/GrowersLoader";

interface GetMyOrdersData {
    getMyOrders: [OrderData];
}

const UpcomingList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const { data: orders, refetch } = useQuery<GetMyOrdersData>(getMyOrders);

    if (!orders) {
        return <GrowersLoader />;
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={orders && orders.getMyOrders}
                style={{ flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={(): void => {
                            refetch();
                        }}
                    />
                }
                renderItem={({ item }): ReactElement => (
                    <UpcomingCardHeader order={item} />
                )}
                ListEmptyComponent={(): ReactElement => (
                    <View style={[styles.emptyContainer, styles.shadow1]}>
                        <Cart />
                        <Text style={styles.youHaveNoOrderText}>
                            {i18n.t("orders.youHaveNoOrder")}
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

export default UpcomingList;
