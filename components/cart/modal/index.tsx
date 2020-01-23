import React, { FunctionComponent, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles/index.style';
import HeaderCart from './Header';
import AddressInformation from '../content/AddressInformations';
import DeliveryDate from '../content/DeliveryDate';
import ProductListItem from '../content/ProductList';

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
                <ScrollView style={{ width: '100%', flex: 1 }}>
                    <AddressInformation />
                    <DeliveryDate />
                    <ProductListItem />
                </ScrollView>
            </Modal>
        </View>
    );
};

export default ModalCart;
