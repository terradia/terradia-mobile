import React, { FunctionComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "@components/cart/content/styles/ProductList.style";
import i18n from "@i18n/i18n";
import { useQuery } from "@apollo/react-hooks";
import getStripeCustomerDefaultSource from "../../../graphql/wallet/getStripeCustomerDefaultSource.graphql";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ThemedContainer, ThemedText } from "@components/theme/Theme";

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
const PaymentMethod: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const { data: defaultSource } = useQuery(getStripeCustomerDefaultSource);
    return (
        <ThemedContainer>
            <ThemedText style={styles.title}>
                {i18n.t("cart.paymentMethod")}
            </ThemedText>
            {defaultSource && defaultSource.getStripeCustomerDefaultSource && (
                <TouchableOpacity
                    style={[styles.subFieldContainer, { marginBottom: 40 }]}
                    onPress={() => {
                        navigate("CardsListSelector");
                    }}
                >
                    <View style={styles.cardInfoContainer}>
                        <Image
                            style={{ width: 50, height: 30 }}
                            source={
                                Icons[
                                    defaultSource.getStripeCustomerDefaultSource.brand.toLowerCase()
                                ]
                            }
                        />
                        <Text style={styles.subFieldText}>
                            {defaultSource.getStripeCustomerDefaultSource.last4}
                        </Text>
                    </View>
                    <Entypo name="chevron-right" size={27} />
                </TouchableOpacity>
            )}
        </ThemedContainer>
    );
};

export default PaymentMethod;
