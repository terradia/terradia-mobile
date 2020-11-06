import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "@components/orders/upcomingReview/styles/UpcomingReviewContent.style";
import { FontAwesome5 } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { OrderData } from "@interfaces/Orders";

interface UpcomingReviewContentHeaderData {
    order: OrderData;
}

const UpcomingReviewContentHeader: FunctionComponent<UpcomingReviewContentHeaderData> = ({
    order
}) => {
    return (
        <>
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
                <FontAwesome5 name="calendar-alt" size={20} color="#5CC04A" />
                <Text style={styles.statusText}>
                    {i18n.t("orders.scheduleWaiting")}
                </Text>
            </View>
            <View style={styles.divider} />
        </>
    );
};

export default UpcomingReviewContentHeader;
