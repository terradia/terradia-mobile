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
    const [isOpen, setOpen] = useState(isModalOpen);

    return (
        <View style={{ flex: 1 }}>
            <Modal
                isVisible={isOpen}
                style={styles.modalContainer}
                onSwipeComplete={(): void => setOpen(false)}
                swipeDirection={['down']}
                onModalHide={() => setModalOpen(false)}
            >
                <HeaderCart setModalOpen={setOpen} />
            </Modal>
        </View>
    );
};

export default ModalCart;
