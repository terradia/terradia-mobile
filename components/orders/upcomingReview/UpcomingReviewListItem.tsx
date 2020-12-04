import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { OrderProductData } from "@interfaces/Orders";
import styles from "./styles/UpcomingReviewListItem.style";

interface UpcomingReviewListItem {
    orderProduct: OrderProductData;
}

const UpcomingReviewListItem: FunctionComponent<UpcomingReviewListItem> = ({
    orderProduct
}) => {
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
                <Text style={styles.textInfoItem}>
                    {orderProduct.product.name}
                </Text>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.UnitContainer}>
                <Text style={styles.textInfoItem}>
                    {orderProduct.product.quantityForUnit +
                        (orderProduct.product.unit
                            ? orderProduct.product.unit.notation
                            : " Pièce(s)")}
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

export default UpcomingReviewListItem;
