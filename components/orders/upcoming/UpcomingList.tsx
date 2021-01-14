import React, { FunctionComponent, ReactElement, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import UpcomingCardHeader from "./UpcomingCardHeader";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/react-hooks";
import getMyOrders from "../../../graphql/orders/getMyOrders.graphql";
import { OrderData } from "@interfaces/Orders";
import i18n from "@i18n/i18n";
import CardListLoader from "@components/growers/CardListLoader";
import { EmptyListElement } from "@components/orders/past/PastList";
import { ThemedContainer } from "@components/theme/Theme";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GetMyOrdersData {
    getMyOrders: [OrderData];
}

const UpcomingList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const { data: orders, loading, refetch } = useQuery<GetMyOrdersData>(
        getMyOrders
    );
    console.log(orders, loading, AsyncStorage.getItem("token"));

    if (!orders) {
        return <CardListLoader />;
    }

    return (
        <ThemedContainer style={{ flex: 1, marginTop: calcWidth(4) }}>
            <FlatList
                data={orders && orders.getMyOrders}
                style={{ flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={(): void => {
                            setRefreshing(true);
                            refetch().then(() => setRefreshing(false));
                        }}
                    />
                }
                renderItem={({ item }): ReactElement => (
                    <UpcomingCardHeader order={item} />
                )}
                ListEmptyComponent={(): ReactElement => (
                    <EmptyListElement
                        title={i18n.t("orders.youHaveNoOrder")}
                        callToAction={i18n.t("orders.discoverProducers")}
                        navigate={navigate}
                    />
                )}
            />
        </ThemedContainer>
    );
};

export default UpcomingList;
