import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { OrderProductHistoryData } from "@interfaces/Orders";
import styles from "./styles/PastReviewListItem.style";

interface UpcomingReviewListItem {
    orderProduct: OrderProductHistoryData;
}

const PastReviewListItem: FunctionComponent<UpcomingReviewListItem> = ({
    orderProduct
}) => {
    console.log(orderProduct);
    return (
        <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={styles.numberProductsMainContainer}>
                <View style={styles.numberProductsContainer}>
                    <Text style={styles.numberProductsNumber}>
                        {orderProduct.quantity}
                    </Text>
                </View>
            </View>
            <View style={styles.productNameContainer}>
                <Text style={styles.textInfoItem}>{orderProduct.name}</Text>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.UnitContainer}>
                <Text style={styles.textInfoItem}>
                    {orderProduct.quantityForUnit + orderProduct.unit.notation}
                </Text>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.priceContainer}>
                <Text style={styles.textInfoItem}>
                    {orderProduct.price.toFixed(2) + "€"}
                </Text>
            </View>
        </View>
    );
};

export default PastReviewListItem;
