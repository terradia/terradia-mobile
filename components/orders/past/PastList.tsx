import React, { FunctionComponent, ReactElement, useState } from "react";
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    RefreshControl,
    ViewProps
} from "react-native";
import PastCardHeader from "./PastCardHeader";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/react-hooks";
import getMyOrderHistories from "../../../graphql/orders/getMyOrderHistories.graphql";
import { OrderData, OrderHistoryData } from "@interfaces/Orders";
import styles from "@components/orders/upcoming/styles/UpcomingList.style";
import Cart from "../../../assets/svg/cart.svg";
import i18n from "@i18n/i18n";
import CardListLoader from "@components/growers/CardListLoader";
import { ThemedBox } from "@components/theme/Theme";

interface GetMyOrdersHistoriesData {
    getMyOrderHistories: [OrderHistoryData];
}

interface EmptyElementProps {
    navigate: (route: string) => void;
    title: string;
    callToAction: string;
}

export const EmptyListElement: FunctionComponent<EmptyElementProps> = ({
    navigate,
    title,
    callToAction,
    ...props
}) => {
    return (
        <ThemedBox style={[styles.emptyContainer, styles.shadow1]}>
            <Cart />
            <Text style={styles.youHaveNoOrderText}>{title}</Text>
            <TouchableOpacity
                style={styles.discoverProducersContainer}
                onPress={(): void => navigate("Grower")}
            >
                <Text style={styles.discoverProducersText}>{callToAction}</Text>
            </TouchableOpacity>
        </ThemedBox>
    );
};

const PastList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const { data: orders, refetch } = useQuery<GetMyOrdersHistoriesData>(
        getMyOrderHistories
    );

    if (!orders) {
        return <CardListLoader />;
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
                    <EmptyListElement
                        title={i18n.t("orders.youHaveNoOrderHistory")}
                        callToAction={i18n.t("orders.discoverProducers")}
                        navigate={navigate}
                    />
                )}
            />
        </View>
    );
};

export default PastList;
