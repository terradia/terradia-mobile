import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "@components/orders/styles/OrderFooter.style";
import { Feather } from "@expo/vector-icons";
import React from "react";
import i18n from "@i18n/i18n";
import { OrderData, OrderHistoryData } from "@interfaces/Orders";
import { CartData } from "@interfaces/User";
import { ThemedBox, ThemedText } from '@components/theme/Theme';

interface OrderFooterProps {
    order?: OrderData | OrderHistoryData;
    cart?: CartData;
}

export const OrderFooter: React.FunctionComponent<OrderFooterProps> = ({
    order,
    cart,
    ...props
}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.bottomInfoContainers}>
                <View style={styles.bottomContainerInfo}>
                    <ThemedText style={styles.bottomInfoText}>
                        {i18n.t("orders.serviceFees")}
                    </ThemedText>
                    <TouchableOpacity style={styles.infoContainer}>
                        <Feather name="info" size={22} color="#575757" />
                    </TouchableOpacity>
                </View>
                <ThemedText style={styles.bottomPriceText}>0.50€</ThemedText>
            </View>
            <View style={styles.bottomInfoContainers}>
                <View style={styles.bottomContainerInfo}>
                    <ThemedText style={styles.bottomInfoText}>
                        {i18n.t("orders.smallOrderFee")}
                    </ThemedText>
                    <TouchableOpacity style={styles.infoContainer}>
                        <Feather name="info" size={22} color="#575757" />
                    </TouchableOpacity>
                </View>
                <ThemedText style={styles.bottomPriceText}>
                    {cart &&
                        (cart.totalPrice > 5 ? 0 : cart.totalPrice - 5) + "€"}
                    {order && (order.price > 5 ? 0 : order.price - 5) + "€"}
                </ThemedText>
            </View>
            <View style={styles.bottomInfoContainers}>
                <ThemedText style={styles.totalText}>
                    {i18n.t("orders.total")}
                </ThemedText>
                <ThemedText style={styles.totalPrice}>
                    {cart && cart.totalPrice.toFixed(2) + "€"}
                    {order && order.price.toFixed(2) + "€"}
                </ThemedText>
            </View>
        </View>
    );
};
