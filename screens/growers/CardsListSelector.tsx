import React, { FunctionComponent, ReactElement } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import HeaderAccount from "@components/account/Header";
import { AntDesign } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { useMutation, useQuery } from "@apollo/react-hooks";
import ListCustomerCards from "../../graphql/wallet/listCustomerCards.graphql";
import styles from "./styles/CardsListSelector.style";
import { useNavigation } from "react-navigation-hooks";
import { GetCardsReq } from "@interfaces/Wallet";
import getStripeCustomerDefaultSource from "../../graphql/wallet/getStripeCustomerDefaultSource.graphql";
import updateCustomerDefaultSource from "../../graphql/wallet/updateCustomerDefaultSOurce.graphql";
import Spinner from "react-native-loading-spinner-overlay";

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

const CardsListSelector: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const { data: cards } = useQuery<GetCardsReq>(ListCustomerCards);
    const { data: defaultSource, refetch, networkStatus } = useQuery(
        getStripeCustomerDefaultSource,
        {
            notifyOnNetworkStatusChange: true
        }
    );
    const [updateCustomerSource, { loading: isUpdating }] = useMutation(
        updateCustomerDefaultSource
    );
    const _formatExpiry = (month, year): string => {
        const newMonth = month.length === 1 ? "0" + month : month;
        const newYear = year.substr(2, 4);
        return newMonth + "/" + newYear;
    };
    return (
        <>
            <Spinner
                visible={isUpdating || networkStatus === 4}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />
            <HeaderAccount title={"Mon porte feuille"} backButton={true} />

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldTitle}>
                    {i18n.t("walletScreen.paymentMethods")}
                </Text>
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
                                    style={{ width: 50, height: 30 }}
                                    source={Icons[val.brand.toLowerCase()]}
                                />
                                <Text style={styles.subFieldText}>
                                    {val.last4}
                                </Text>
                            </View>
                            {defaultSource &&
                                defaultSource.getStripeCustomerDefaultSource &&
                                defaultSource.getStripeCustomerDefaultSource
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
                    <Text style={styles.addPaymentMethod}>
                        {i18n.t("walletScreen.addPaymentMethod")}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
CardsListSelector.navigationOptions = {
    headerMode: "none",
    header: (): ReactElement => null,
    tabBarVisible: false
};

export default CardsListSelector;
