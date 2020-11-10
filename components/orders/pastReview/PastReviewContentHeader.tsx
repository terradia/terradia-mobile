import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles/PastReviewContent.style";
import { FontAwesome5 } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { OrderHistoryData } from "@interfaces/Orders";
import Moment from "moment";

interface PastReviewContentHeaderData {
    order: OrderHistoryData;
}

const PastReviewContentHeader: FunctionComponent<PastReviewContentHeaderData> = ({
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
                    {i18n.t("orders.orderCompleted")}
                </Text>
            </View>
            <View style={styles.statusLine}>
                <FontAwesome5 name="calendar-alt" size={20} color="#5CC04A" />
                <Text style={styles.statusText}>
                    {i18n.t("orders.receivedOn") + " "}
                    {Moment(order.createdAt).format("DD MMM YYYY")}
                </Text>
            </View>
            <View style={styles.divider} />
        </>
    );
};

export default PastReviewContentHeader;
