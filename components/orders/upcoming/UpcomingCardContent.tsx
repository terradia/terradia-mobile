import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles/UpcomingCardContent.style";
import { OrderData } from "@interfaces/Orders";
import i18n from "@i18n/i18n";
import Moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { ThemedBox, ThemedText, withTheme } from "@components/theme/Theme";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
import { calcWidth } from '../../../utils/deviceResponsiveHelper';

declare interface UpcomingCardContentData {
    order?: OrderData;
    theme?: any;
}

const UpcomingCardContent: FunctionComponent<UpcomingCardContentData> = ({
    order,
    theme
}) => {
    const { navigate } = useNavigation();
    return (
        <ThemedBox
            style={{
                borderRadius: 8
            }}
        >
            <View style={styles.orderContainer}>
                <ThemedText style={styles.orderText}>
                    {i18n.t("orders.order")}{" "}
                </ThemedText>
                <ThemedText style={styles.orderNumber}>
                    {"#" + order.code.toUpperCase()}
                </ThemedText>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.statusLine}>
                    <View style={styles.statusIconContainer}>
                        <FontAwesome5
                            name="hourglass-start"
                            size={20}
                            color={theme.palette.primary}
                        />
                    </View>
                    <ThemedText style={styles.statusText}>
                        {order.status === "PENDING"
                            ? i18n.t("orders.pending")
                            : i18n.t("orders.orderAccepted")}
                    </ThemedText>
                </View>
                <View style={styles.statusLine}>
                    <FontAwesome5
                        name="calendar-alt"
                        size={20}
                        color={theme.palette.primary}
                    />
                    <ThemedText style={styles.statusText}>
                        {i18n.t("orders.scheduleWaiting")}
                    </ThemedText>
                </View>
                <View style={styles.dividerDate}>
                    <View style={styles.divider} />
                    <ThemedText style={styles.dateText}>
                        {"le " +
                            Moment(order.createdAt).format(
                                "DD MMM YYYY à HH:mm"
                            )}
                    </ThemedText>
                </View>
                <View style={styles.totalPriceProductsContainer}>
                    <View style={styles.numberProductsMainContainer}>
                        <View
                            style={[
                                styles.numberProductsContainer,
                                {
                                    backgroundColor:
                                        theme.palette.lighterBackgroundColor
                                }
                            ]}
                        >
                            <ThemedText style={[styles.numberProductsNumber]}>
                                {order.numberProducts > 9
                                    ? "9+"
                                    : order.numberProducts}
                            </ThemedText>
                        </View>
                        <ThemedText style={styles.numberProductsText}>
                            {i18n.t("orders.productsNumbers")}
                        </ThemedText>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <ThemedText style={styles.totalText}>
                            {i18n.t("orders.total")}
                        </ThemedText>
                        <ThemedText style={styles.totalNumber}>
                            {order.price.toFixed(2) + "€"}
                        </ThemedText>
                    </View>
                </View>
                <ButtonWithIcon
                    onPress={(): void =>
                        navigate("UpcomingOrderReview", { order })
                    }
                    title={i18n.t("orders.viewOrder")}
                    radius={8}
                    type={"full"}
                    size={50}
                    style={{
                        marginTop: calcWidth(4),
                        marginBottom: calcWidth(4)
                    }}
                />
            </View>
        </ThemedBox>
    );
};

export default withTheme(UpcomingCardContent);
