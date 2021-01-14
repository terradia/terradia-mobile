import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import styles from "@components/cart/content/styles/ProductList.style";
import i18n from "@i18n/i18n";
import { CartData } from "@interfaces/User";
import { useMutation } from "@apollo/react-hooks";
import createACharge from "../../../graphql/cart/createACharge.graphql";
import Spinner from "react-native-loading-spinner-overlay";
import Modal from "react-native-modal";
import ModalPaymentValidated from "./ModalPaymentValidated";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";
import getMyOrders from "../../../graphql/orders/getMyOrders.graphql";

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
                    .query({
                        query: getMyOrders,
                        fetchPolicy: "network-only"
                    })
                    .then(() => {
                        setIsValidated(true);
                    });
                // client
                //     .query({ query: getCart, fetchPolicy: "network-only" })
                //     .then(() => setIsValidated(true));
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
            <View
                style={{
                    paddingHorizontal: calcWidth(4)
                }}
            >
                <ButtonWithIcon
                    onPress={(): Promise<void> => createPaymentSource()}
                    style={styles.priceContainer}
                    size={50}
                    title={i18n.t("cart.orderNow")}
                    textSize={20}
                    width={calcWidth(92)}
                    type={"full"}
                />
            </View>
        </>
    );
};

export default CartPayment;
