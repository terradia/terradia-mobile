import React, { FunctionComponent, ReactElement } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import CartPayment from "@components/cart/payment/CartPayment";
import { useNavigation } from "@react-navigation/native";
import HeaderAccount from "@components/theme/MainHeader";
import i18n from "@i18n/i18n";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GetCardsReq } from "@interfaces/Wallet";
import ListCustomerCards from "../../graphql/wallet/listCustomerCards.graphql";
import getStripeCustomerDefaultSource from "../../graphql/wallet/getStripeCustomerDefaultSource.graphql";
import updateCustomerDefaultSource from "../../graphql/wallet/updateCustomerDefaultSource.graphql";
import styles from "../growers/styles/CardsListSelector.style";
import { AntDesign, Feather } from "@expo/vector-icons";
import { requestOneTimePayment } from "react-native-paypal";
import axios from "axios";
import { StackScreenProps } from "@react-navigation/stack";
import { CartData } from "@interfaces/User";
import {
    ThemedBox,
    ThemedContainer,
    ThemedSafeAreaView,
    ThemedText
} from "@components/theme/Theme";
import MainHeader from "@components/theme/MainHeader";
import HeaderCart from "@components/cart/modal/Header";
import { calcWidth } from "../../utils/deviceResponsiveHelper";

const Icons = {
    cvc: require("../../assets/icons/stp_card_cvc.png"),
    // eslint-disable-next-line @typescript-eslint/camelcase
    cvc_amex: require("../../assets/icons/stp_card_cvc_amex.png"),
    "american-express": require("../../assets/icons/stp_card_amex.png"),
    "diners-club": require("../../assets/icons/stp_card_diners.png"),
    mastercard: require("../../assets/icons/stp_card_mastercard.png"),
    discover: require("../../assets/icons/stp_card_discover.png"),
    jcb: require("../../assets/icons/stp_card_jcb.png"),
    placeholder: require("../../assets/icons/stp_card_unknown.png"),
    visa: require("../../assets/icons/stp_card_visa.png")
};

type RootStackParamList = {
    Home: undefined;
    PaymentPicker: { cart: CartData };
};
type Props = StackScreenProps<RootStackParamList, "PaymentPicker">;

const PaymentPicker = ({ route }: Props): ReactElement => {
    const { cart } = route.params;
    const { navigate } = useNavigation();
    const { data: cards, loading: loadingCards } = useQuery<GetCardsReq>(
        ListCustomerCards
    );
    const { data: defaultSource, refetch, networkStatus } = useQuery(
        getStripeCustomerDefaultSource,
        {
            notifyOnNetworkStatusChange: true
        }
    );
    const [updateCustomerSource, { loading: isUpdating }] = useMutation(
        updateCustomerDefaultSource
    );

    const _paypalPayment = async () => {
        const data = await axios.get(
            `https://braintree-sample-merchant.herokuapp.com/client_token`
        );
        const token = data.data.client_token;
        // const token = "sandbox_tv52jwkq_yfgks72mxk9kwfq8"
        // console.log(token);
        try {
            const {
                nonce,
                payerId,
                email,
                firstName,
                lastName,
                phone
            } = await requestOneTimePayment(token, {
                amount: cart.totalPrice.toString(), // required
                // any PayPal supported currency (see here: https://developer.paypal.com/docs/integration/direct/rest/currency-codes/#paypal-account-payments)
                currency: "EUR",
                // any PayPal supported locale (see here: https://braintree.github.io/braintree_ios/Classes/BTPayPalRequest.html#/c:objc(cs)BTPayPalRequest(py)localeCode)
                localeCode: "en_GB",
                shippingAddressRequired: false,
                userAction: "commit", // display 'Pay Now' on the PayPal review page
                // one of 'authorize', 'sale', 'order'. defaults to 'authorize'. see details here: https://developer.paypal.com/docs/api/payments/v1/#payment-create-request-body
                intent: "authorize"
            });
            console.log(nonce);
            console.log(payerId);
            console.log(email);
            console.log(firstName);
        } catch (error) {
            console.log("error" + JSON.stringify(error));
        }
    };

    return (
        <ThemedSafeAreaView style={{ flex: 1 }}>
            <HeaderCart type={"payment"} />
            <View style={{ flex: 1, paddingHorizontal: calcWidth(4) }}>
                <View style={{ flex: 1 }}>
                    <ThemedBox style={styles.mainCard}>
                        <View
                            style={[
                                styles.fieldContainer,
                                { marginBottom: 20 }
                            ]}
                        >
                            <ThemedText style={styles.fieldTitle}>
                                {i18n.t("cart.cards")}
                            </ThemedText>
                            {loadingCards && (
                                <ActivityIndicator
                                    color={"#5CC04A"}
                                    size={"large"}
                                />
                            )}
                            {cards &&
                                cards.listCustomerCards.length > 0 &&
                                cards.listCustomerCards.map(val => (
                                    <TouchableOpacity
                                        style={styles.subFieldContainer}
                                        key={val.id}
                                        onPress={() => {
                                            updateCustomerSource({
                                                variables: { cardId: val.id }
                                            }).then(() => {
                                                refetch();
                                            });
                                        }}
                                    >
                                        <View style={styles.cardInfoContainer}>
                                            <Image
                                                style={{
                                                    width: 50,
                                                    height: 30
                                                }}
                                                source={
                                                    Icons[
                                                        val.brand.toLowerCase()
                                                    ]
                                                }
                                            />
                                            <ThemedText
                                                style={styles.subFieldText}
                                            >
                                                {val.last4}
                                            </ThemedText>
                                        </View>
                                        {defaultSource &&
                                            defaultSource.getStripeCustomerDefaultSource &&
                                            defaultSource
                                                .getStripeCustomerDefaultSource
                                                .id === val.id && (
                                                <AntDesign
                                                    name="check"
                                                    size={24}
                                                    color="green"
                                                />
                                            )}
                                    </TouchableOpacity>
                                ))}

                            <TouchableOpacity
                                onPress={(): void => {
                                    navigate("CardEditor");
                                }}
                            >
                                <ThemedText style={styles.addPaymentMethod}>
                                    {i18n.t("walletScreen.addPaymentMethod")}
                                </ThemedText>
                            </TouchableOpacity>
                        </View>
                        {/*<View>*/}
                        {/*    <ThemedText style={styles.fieldTitle}>*/}
                        {/*        {i18n.t("cart.otherPaymentMethod")}*/}
                        {/*    </ThemedText>*/}
                        {/*    <TouchableOpacity*/}
                        {/*        onPress={(): Promise<void> => _paypalPayment()}*/}
                        {/*        style={[styles.subFieldContainer, {}]}*/}
                        {/*    >*/}
                        {/*        <View style={styles.cardInfoContainer}>*/}
                        {/*            <Image*/}
                        {/*                style={{*/}
                        {/*                    width: 50,*/}
                        {/*                    height: 30,*/}
                        {/*                    marginRight: 10*/}
                        {/*                }}*/}
                        {/*                source={require("../../assets/images/pp-acceptance-large.png")}*/}
                        {/*            />*/}
                        {/*            <ThemedText style={styles.subFieldText}>*/}
                        {/*                {"Paypal"}*/}
                        {/*            </ThemedText>*/}
                        {/*        </View>*/}
                        {/*        <Feather*/}
                        {/*            name="chevron-right"*/}
                        {/*            size={26}*/}
                        {/*            color="#575757"*/}
                        {/*        />*/}
                        {/*    </TouchableOpacity>*/}
                        {/*</View>*/}
                    </ThemedBox>
                </View>
            </View>
            <CartPayment cart={cart} />
        </ThemedSafeAreaView>
    );
};

// @ts-ignore
PaymentPicker.navigationOptions = {
    headerMode: "none",
    header: (): ReactElement => null,
    tabBarVisible: false
};

export default PaymentPicker;
