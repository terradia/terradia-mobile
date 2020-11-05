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

interface GetMyOrdersHistoriesData {
    getMyOrderHistories: [OrderHistoryData];
}

const PastList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const { data: orders, refetch } = useQuery<GetMyOrdersHistoriesData>(
        getMyOrderHistories
    );
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={
                    orders &&
                    orders.getMyOrderHistories &&
                    orders.getMyOrderHistories
                }
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
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontFamily: "Montserrat" }}>
                            Vous n'avez pas de commande en scours
                        </Text>
                        <TouchableOpacity
                            onPress={(): boolean => navigate("Grower")}
                        >
                            <Text
                                style={{
                                    fontFamily: "Montserrat",
                                    marginTop: 20,
                                    textDecorationLine: "underline"
                                }}
                            >
                                Pourquoi ne pas commander ?
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default PastList;
