import React, {
    FunctionComponent,
    ReactElement,
    useRef,
    useState
} from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./styles/UpcomingReviewContent.style";
import i18n from "@i18n/i18n";
import { OrderData, OrderHistoryData } from "@interfaces/Orders";
import UpcomingReviewListItem from "@components/orders/upcomingReview/UpcomingReviewListItem";
import { Feather } from "@expo/vector-icons";
import { useMutation, useQuery } from "@apollo/react-hooks";
import getPaymentIntentsCard from "../../../graphql/orders/getPaymentIntentsCard.graphql";
import { CardData } from "@interfaces/Wallet";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import UpcomingReviewContentHeader from "./UpcomingReviewContentHeader";
const { width } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import Swiper from "@components/swiper/Swiper";
import receiveOrder from "../../../graphql/orders/receiveOrder.graphql";
import TerradiaSimpleDialog from "@components/modals/dialogs/TerradiaSimpleDialog";
import getMyOrders from "../../../graphql/orders/getMyOrders.graphql";
import getMyOrderHistories from "../../../graphql/orders/getMyOrderHistories.graphql";
import { useNavigation } from "@react-navigation/native";

interface UpcomingReviewContentData {
    order: OrderData;
}

interface GetPaymentIntentsCard {
    getPaymentIntentsCard: CardData;
}

interface ReceiveOrderData {
    receiveOrder: OrderHistoryData;
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

const UpcomingReviewContentFooter: FunctionComponent<UpcomingReviewContentData> = ({
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
            <View style={styles.divider} />
            <View style={styles.bottomInfoContainers}>
                <View style={styles.bottomContainerInfo}>
                    <Text style={styles.bottomInfoText}>
                        {i18n.t("orders.serviceFees")}
                    </Text>
                    <TouchableOpacity style={styles.infoContainer}>
                        <Feather name="info" size={22} color="#575757" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.bottomPriceText}>0.50€</Text>
            </View>
            <View style={styles.bottomInfoContainers}>
                <View style={styles.bottomContainerInfo}>
                    <Text style={styles.bottomInfoText}>
                        {i18n.t("orders.smallOrderFee")}
                    </Text>
                    <TouchableOpacity style={styles.infoContainer}>
                        <Feather name="info" size={22} color="#575757" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.bottomPriceText}>
                    {(order.price > 5 ? 0 : order.price - 5) + "€"}
                </Text>
            </View>
            <View style={styles.bottomInfoContainers}>
                <Text style={styles.totalText}>{i18n.t("orders.total")}</Text>
                <Text style={styles.totalPrice}>
                    {order.price.toFixed(2) + "€"}
                </Text>
            </View>
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
    const [isRequestDone, setRequestDone] = useState(false);
    const [isDialogVisible, setDialogVisible] = useState(false);
    const swiperRef = useRef(null);
    const { goBack } = useNavigation();
    const [ReceiveOrder, { client }] = useMutation<ReceiveOrderData>(
        receiveOrder
    );
    const simulateRequest = (): void => {
        ReceiveOrder({ variables: { id: order.id } }).then(() => {
            client.query({ query: getMyOrders, fetchPolicy: "network-only" });
            client.query({
                query: getMyOrderHistories,
                fetchPolicy: "network-only"
            });
            setRequestDone(true);
        });
    };

    const onDialogYesPressed = (): void => {
        simulateRequest();
    };

    const onDialogNoPressed = (): void => {
        swiperRef.current.resetSwiper();
        return;
    };

    return (
        <View style={styles.container}>
            <TerradiaSimpleDialog
                title={i18n.t("orders.validateCommand")}
                message={i18n.t("orders.validateOrderPickUp")}
                positiveButtonTitle={i18n.t("common.yes")}
                negativeButtonTitle={i18n.t("productScreen.no")}
                isDialogVisible={isDialogVisible}
                setDialogVisible={setDialogVisible}
                onDialogNoPressed={onDialogNoPressed}
                onDialogYesPressed={onDialogYesPressed}
            />
            <FlatList
                data={order.products}
                style={{ height: "100%", paddingTop: 70, zIndex: 0 }}
                ListHeaderComponent={(): ReactElement => (
                    <UpcomingReviewContentHeader order={order} />
                )}
                ListFooterComponent={(): ReactElement => (
                    <UpcomingReviewContentFooter order={order} />
                )}
                renderItem={({ item }): ReactElement => (
                    <UpcomingReviewListItem orderProduct={item} />
                )}
            />
            <View style={{ position: "absolute", bottom: 30, width: "100%" }}>
                <Swiper
                    ref={swiperRef}
                    height={60}
                    width={width - 50}
                    borderRadius={30}
                    onSwipeEnd={(): void => setDialogVisible(true)}
                    icon={
                        <FontAwesome
                            name="angle-right"
                            size={40}
                            color="white"
                        />
                    }
                    text={
                        <Text
                            style={
                                order.status === "PENDING"
                                    ? styles.swiperTextDisable
                                    : styles.swiperTextEnable
                            }
                        >
                            {order.status === "PENDING"
                                ? "Attente d'acceptation"
                                : "Glisser pour accépter"}
                        </Text>
                    }
                    enabled={order.status !== "PENDING"}
                    borderColor={"#5CC04A"}
                    disabledColor={"#C2C2C2"}
                    swiperColor={"#5CC04A"}
                    backgroundColor={"white"}
                    borderWidth={2}
                    onAnimationDone={(): void => goBack()}
                    isRequestDone={isRequestDone}
                />
            </View>
        </View>
    );
};

export default UpcomingReviewContent;
