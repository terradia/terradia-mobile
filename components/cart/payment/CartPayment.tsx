import React, { FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "@components/cart/content/styles/ProductList.style";
import i18n from "@i18n/i18n";
import { CartData } from "@interfaces/User";
import { useMutation } from "@apollo/react-hooks";
import createACharge from "../../../graphql/cart/createACharge.graphql";
import Spinner from "react-native-loading-spinner-overlay";
import Modal from "react-native-modal";
import ModalPaymentValidated from "./ModalPaymentValidated";
import getCart from "../../../graphql/cart/getCart.graphql";

declare interface CartPaymentData {
    cart: CartData;
}

const CartPayment: FunctionComponent<CartPaymentData> = ({ cart }) => {
    const [CreateACharge, { loading, client }] = useMutation(createACharge);
    const [isValidated, setIsValidated] = useState(false);

    const createPaymentSource = async () => {
        CreateACharge()
            .then(() => {
                client
                    .query({ query: getCart, fetchPolicy: "network-only" })
                    .then(() => setIsValidated(true));
            })
            .catch(e => console.log(e));
    };

    return (
        <>
            {isValidated && (
                <View style={{ justifyContent: "flex-end" }}>
                    <Modal
                        isVisible={isValidated}
                        style={styles.modalContainer}
                        onSwipeComplete={(): void => setIsValidated(false)}
                        swipeDirection={[]}
                        propagateSwipe={true}
                    >
                        <ModalPaymentValidated
                            setIsValidated={setIsValidated}
                        />
                    </Modal>
                </View>
            )}
            <Spinner
                visible={loading}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />
            <TouchableOpacity
                onPress={(): Promise<void> => createPaymentSource()}
                style={styles.priceContainer}
            >
                <Text style={styles.orderButton}>
                    {i18n.t("cart.orderNow")}
                </Text>
                <View style={styles.priceTotalContainer}>
                    <Text style={styles.total}>{i18n.t("cart.total")}</Text>
                    <Text style={styles.totalPrice}>
                        {cart.totalPrice.toFixed(2)} €
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default CartPayment;
