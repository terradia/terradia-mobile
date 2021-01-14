import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles/PastCardContent.style";
import { OrderData, OrderHistoryData } from "@interfaces/Orders";
import i18n from "@i18n/i18n";
import Moment from "moment";
import { useNavigation } from "@react-navigation/native";

declare interface UpcomingCardContentData {
    order?: OrderHistoryData;
}

const PastCardContent: FunctionComponent<UpcomingCardContentData> = ({
    order
}) => {
    const { navigate } = useNavigation();
    return (
        <View>
            <View style={styles.orderContainer}>
                <Text style={styles.orderText}>{i18n.t("orders.order")} </Text>
                <Text style={styles.orderNumber}>{"#" + order.code}</Text>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.orderStatusContainer}>
                    <View>
                        <View style={styles.statusLine}>
                            <FontAwesome5
                                name="check"
                                size={20}
                                color="#5CC04A"
                            />
                            <Text style={styles.statusText}>
                                {i18n.t("orders.orderFinished")}
                            </Text>
                        </View>
                        <View style={styles.statusLine}>
                            <FontAwesome5
                                name="calendar-alt"
                                size={20}
                                color="#5CC04A"
                            />
                            <View>
                                <Text style={styles.statusText}>
                                    {i18n.t("orders.receivedOn")}
                                </Text>
                                <Text style={styles.statusText}>
                                    {Moment(order.createdAt).format(
                                        "DD MMM YYYY"
                                    )}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.rateOrderContainer}>
                        <Text style={styles.rateOrderText}>
                            {i18n.t("orders.rateOrder")}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dividerDate}>
                    <View style={styles.divider} />
                    <Text style={styles.dateText}>
                        {Moment(order.orderCreationDate).format("DD MMM YYYY")}
                    </Text>
                </View>
                <View style={styles.totalPriceProductsContainer}>
                    <View style={styles.numberProductsMainContainer}>
                        <View style={styles.numberProductsContainer}>
                            <Text style={styles.numberProductsNumber}>
                                {order.numberProducts > 9
                                    ? "9+"
                                    : order.numberProducts}
                            </Text>
                        </View>
                        <Text style={styles.numberProductsText}>
                            {i18n.t("orders.productsNumbers")}
                        </Text>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={styles.totalText}>
                            {i18n.t("orders.total")}
                        </Text>
                        <Text style={styles.totalNumber}>
                            {order.price.toFixed(2).replace(".", ",")}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={(): void => navigate("PastOrderReview", { order })}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.seeOrder}>
                        {i18n.t("orders.viewReceipt")}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PastCardContent;
