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
import { ThemedBox, ThemedContainer } from "@components/theme/Theme";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";

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
            <ButtonWithIcon
                onPress={(): void => navigate("Grower")}
                type={"outline"}
                size={50}
                title={callToAction}
                style={{
                    marginTop: calcWidth(4),
                    paddingHorizontal: calcWidth(4)
                }}
                width={"100%"}
            />
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
        <ThemedContainer style={{ flex: 1, marginTop: calcWidth(4) }}>
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
        </ThemedContainer>
    );
};

export default PastList;
