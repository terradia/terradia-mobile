import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles/index.style';
import HeaderCart from './Header';

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
                swipeDirection={['down']}
                onModalHide={(): void => setModalOpen(false)}
            >
                <HeaderCart setModalOpen={setModalOpen} />
            </Modal>
        </View>
    );
};

export default ModalCart;
