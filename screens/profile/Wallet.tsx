import React, { FunctionComponent } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from "react-native";
import HeaderAccount from "@components/account/Header";
import { Entypo } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { useQuery } from "@apollo/react-hooks";
import ListCustomerCards from "../../graphql/wallet/listCustomerCards.graphql";
import styles from "./styles/Wallet.style";
import { useNavigation } from "react-navigation-hooks";
import Visa from "../../assets/svg/visa.svg";
import { GetCardsReq } from "@interfaces/Wallet";

const Icons = {
    cvc: require("../../assets/icons/stp_card_cvc.png"),
    cvc_amex: require("../../assets/icons/stp_card_cvc_amex.png"),
    "american-express": require("../../assets/icons/stp_card_amex.png"),
    "diners-club": require("../../assets/icons/stp_card_diners.png"),
    mastercard: require("../../assets/icons/stp_card_mastercard.png"),
    discover: require("../../assets/icons/stp_card_discover.png"),
    jcb: require("../../assets/icons/stp_card_jcb.png"),
    placeholder: require("../../assets/icons/stp_card_unknown.png"),
    visa: require("../../assets/icons/stp_card_visa.png")
};

const Account: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const { data: cards, loading: loadingCards } = useQuery<GetCardsReq>(
        ListCustomerCards
    );
    const _formatExpiry = (month, year): string => {
        const newMonth = month.length === 1 ? "0" + month : month;
        const newYear = year.substr(2, 4);
        return newMonth + "/" + newYear;
    };
    return (
        <View>
            <HeaderAccount title={"Mon porte feuille"} />

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldTitle}>
                    {i18n.t("walletScreen.paymentMethods")}
                </Text>
                {loadingCards && (
                    <ActivityIndicator color={"#5CC04A"} size={"large"} />
                )}
                {cards &&
                    cards.listCustomerCards.length > 0 &&
                    cards.listCustomerCards.map(val => (
                        <TouchableOpacity
                            style={styles.subFieldContainer}
                            key={val.id}
                            onPress={(): boolean =>
                                navigate("CardDisplay", {
                                    number: val.last4,
                                    expiry: _formatExpiry(
                                        val.exp_month.toString(),
                                        val.exp_year.toString()
                                    ),
                                    brand: val.brand,
                                    cardId: val.id
                                })
                            }
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
                            <Entypo name="chevron-right" size={27} />
                        </TouchableOpacity>
                    ))}
                <TouchableOpacity
                    onPress={() => {
                        navigate("CardEditor");
                    }}
                >
                    <Text style={styles.addPaymentMethod}>
                        {i18n.t("walletScreen.addPaymentMethod")}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Account;
