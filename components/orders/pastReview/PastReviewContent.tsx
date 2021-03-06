import React, { FunctionComponent, ReactElement } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/PastReviewContent.style";
import i18n from "@i18n/i18n";
import { OrderHistoryData } from "@interfaces/Orders";
import PastReviewListItem from "./PastReviewListItem";
import { Feather } from "@expo/vector-icons";
import { useQuery } from "@apollo/react-hooks";
import getPaymentIntentsCard from "../../../graphql/orders/getPaymentIntentsCard.graphql";
import { CardData } from "@interfaces/Wallet";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import PastReviewContentHeader from "./PastReviewContentHeader";
import { OrderFooter } from "@components/orders/OrderFooter";

interface UpcomingReviewContentData {
    order: OrderHistoryData;
}

interface GetPaymentIntentsCard {
    getPaymentIntentsCard: CardData;
}

const Icons = {
    cvc: require("../../../assets/icons/stp_card_cvc.png"),
    cvc_amex: require("../../../assets/icons/stp_card_cvc_amex.png"),
    "american-express": require("../../../assets/icons/stp_card_amex.png"),
    "diners-club": require("../../../assets/icons/stp_card_diners.png"),
    mastercard: require("../../../assets/icons/stp_card_mastercard.png"),
    discover: require("../../../assets/icons/stp_card_discover.png"),
    jcb: require("../../../assets/icons/stp_card_jcb.png"),
    placeholder: require("../../../assets/icons/stp_card_unknown.png"),
    visa: require("../../../assets/icons/stp_card_visa.png")
};

const PastReviewContentFooter: FunctionComponent<UpcomingReviewContentData> = ({
    order
}) => {
    const { data: card } = useQuery<GetPaymentIntentsCard>(
        getPaymentIntentsCard,
        {
            variables: { paymentId: order.stripePaymentIntent }
        }
    );
    return (
        <>
            <OrderFooter order={order} />
            {card && card.getPaymentIntentsCard ? (
                <View style={styles.cardContainer}>
                    <Text style={styles.paidWithText}>
                        {i18n.t("orders.paidWith")}
                    </Text>
                    <Image
                        style={{ width: 50, height: 30, marginLeft: 10 }}
                        source={
                            Icons[
                                card.getPaymentIntentsCard.brand.toLowerCase()
                            ]
                        }
                    />
                    <Text style={[styles.paidWithText, { marginRight: 10 }]}>
                        {"---- " + card.getPaymentIntentsCard.last4}
                    </Text>
                </View>
            ) : (
                <SkeletonPlaceholder>
                    <View style={styles.box} />
                </SkeletonPlaceholder>
            )}
            <View style={[styles.divider, { marginBottom: 15 }]} />
        </>
    );
};

const UpcomingReviewContent: FunctionComponent<UpcomingReviewContentData> = ({
    order
}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={order.products}
                style={{ height: "100%", paddingTop: 70, zIndex: 0 }}
                ListHeaderComponent={(): ReactElement => (
                    <PastReviewContentHeader order={order} />
                )}
                ListFooterComponent={(): ReactElement => (
                    <PastReviewContentFooter order={order} />
                )}
                renderItem={({ item }): ReactElement => (
                    <PastReviewListItem orderProduct={item} />
                )}
            />
        </View>
    );
};

export default UpcomingReviewContent;
