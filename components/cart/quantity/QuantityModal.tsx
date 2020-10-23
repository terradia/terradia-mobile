import React, { FunctionComponent } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import QuantityContent from "@components/cart/quantity/QuantityContent";
import styles from "./styles/QuantityModal.style";

declare interface QuantityModalProps {
    isModalOpen: boolean;
    setModalOpen: any;
    item: any;
    addProductToCart: any;
    removeProductFromCart: any;
}

const QuantityModal: FunctionComponent<QuantityModalProps> = ({
    isModalOpen,
    setModalOpen,
    item,
    addProductToCart,
    removeProductFromCart
}) => {
    return (
        <Modal
            isVisible={isModalOpen}
            style={styles.modalContainer}
            swipeDirection={["down"]}
            onSwipeComplete={(): void => setModalOpen(false)}
            coverScreen={true}
            animationOutTiming={90}
        >
            <View style={styles.container}>
                <QuantityContent
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}
                    item={item}
                    addProductToCart={addProductToCart}
                    removeProductFromCart={removeProductFromCart}
                />
            </View>
        </Modal>
    );
};

export default QuantityModal;
