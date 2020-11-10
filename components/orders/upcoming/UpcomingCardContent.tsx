import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles/UpcomingCardContent.style";
import { OrderData } from "@interfaces/Orders";
import i18n from "@i18n/i18n";
import Moment from "moment";
import { useNavigation } from "react-navigation-hooks";

declare interface UpcomingCardContentData {
    order?: OrderData;
}

const UpcomingCardContent: FunctionComponent<UpcomingCardContentData> = ({
    order
}) => {
    const { navigate } = useNavigation();
    return (
        <View>
            <View style={styles.orderContainer}>
                <Text style={styles.orderText}>{i18n.t("orders.order")} </Text>
                <Text style={styles.orderNumber}>
                    {"#" + order.code.toUpperCase()}
                </Text>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.statusLine}>
                    <FontAwesome5
                        name="hourglass-start"
                        size={20}
                        color="#5CC04A"
                    />
                    <Text style={styles.statusText}>
                        {order.status === "PENDING"
                            ? i18n.t("orders.pending")
                            : i18n.t("orders.orderAccepted")}
                    </Text>
                </View>
                <View style={styles.statusLine}>
                    <FontAwesome5
                        name="calendar-alt"
                        size={20}
                        color="#5CC04A"
                    />
                    <Text style={styles.statusText}>
                        {i18n.t("orders.scheduleWaiting")}
                    </Text>
                </View>
                <View style={styles.dividerDate}>
                    <View style={styles.divider} />
                    <Text style={styles.dateText}>
                        {Moment(order.createdAt).format("DD MMM YYYY")}
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
                            {order.price.toFixed(2)}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={(): boolean =>
                        navigate("UpcomingOrderReview", { order })
                    }
                    style={styles.buttonContainer}
                >
                    <Text style={styles.seeOrder}>
                        {i18n.t("orders.viewOrder")}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UpcomingCardContent;
