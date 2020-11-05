import React, { FunctionComponent, useState } from "react";
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

interface GetMyOrdersData {
    getMyOrders: [OrderData];
}

const UpcomingList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const { data: orders, refetch } = useQuery<GetMyOrdersData>(getMyOrders);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={orders && orders.getMyOrders && orders.getMyOrders}
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
                renderItem={({ item }) => <UpcomingCardHeader order={item} />}
                ListEmptyComponent={() => (
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

export default UpcomingList;
