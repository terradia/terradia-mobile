import React, { FunctionComponent } from 'react';
import { ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles/index.style';
import HeaderCart from './Header';
import CartModalContent from '../content';

declare interface ModalProps {
    isModalOpen: boolean;
    setModalOpen: any;
}

const ModalCart: FunctionComponent<ModalProps> = ({
    isModalOpen,
    setModalOpen
}) => {
    return (
        <View style={{ flex: 1 }}>
            <Modal
                isVisible={isModalOpen}
                style={styles.modalContainer}
                onSwipeComplete={(): void => setModalOpen(false)}
                onModalHide={(): void => setModalOpen(false)}
            >
                <HeaderCart />
                <CartModalContent />
            </Modal>
        </View>
    );
};

export default ModalCart;
