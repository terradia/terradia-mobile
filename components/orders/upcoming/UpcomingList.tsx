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
import CardListLoader from "@components/growers/CardListLoader";
import { ThemedBox } from "@components/theme/Theme";
import { EmptyListElement } from "@components/orders/past/PastList";

interface GetMyOrdersData {
    getMyOrders: [OrderData];
}

const UpcomingList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const { data: orders, refetch } = useQuery<GetMyOrdersData>(getMyOrders);

    if (!orders) {
        return <CardListLoader />;
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
                    <EmptyListElement
                        title={i18n.t("orders.youHaveNoOrder")}
                        callToAction={i18n.t("orders.discoverProducers")}
                        navigate={navigate}
                    />
                )}
            />
        </View>
    );
};

export default UpcomingList;
