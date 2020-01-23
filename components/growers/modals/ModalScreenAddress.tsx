import React, { FunctionComponent, useState } from 'React';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ModalScreenAddressSelect from './ModalScreenAddressSelect';
import { Feather } from '@expo/vector-icons';
import ModalScreenAddressDetails from './ModalScreenAddressDetails';
import i18n from '@i18n/i18n';
import styles from './styles/ModalScreenAddress.style';

declare interface ModalScreenAddressSelectProps {
    isOpen: boolean;
    setDisplayModalAddress: any;
}

const ModalScreenAddress: FunctionComponent<ModalScreenAddressSelectProps> = ({
    isOpen,
    setDisplayModalAddress
}) => {
    const [isSearching, setIsSearching] = useState(true);
    const [currentAddress, setCurrentAddress] = useState(null);
    return (
        <View style={styles.container}>
            <Modal
                isVisible={isOpen}
                style={styles.modalContainer}
                onSwipeComplete={(): void => setDisplayModalAddress(false)}
                swipeDirection={['down']}
            >
                <View style={styles.header}>
                    {isSearching ? (
                        <TouchableOpacity
                            onPress={() => setDisplayModalAddress(false)}
                        >
                            <Feather name="x" size={24} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setIsSearching(true)}>
                            <Feather name="arrow-left" size={24} />
                        </TouchableOpacity>
                    )}
                    <Text style={styles.headerTitle}>
                        {isSearching
                            ? i18n.t('addressModal.deliveryAddress')
                            : i18n.t('addressModal.deliveryDetails')}
                    </Text>
                    <View />
                </View>
                {isSearching ? (
                    <ModalScreenAddressSelect
                        setIsSearching={setIsSearching}
                        setCurrentAddress={setCurrentAddress}
                        setDisplayModalAddress={setDisplayModalAddress}
                    />
                ) : (
                    <ModalScreenAddressDetails
                        mainAddress={currentAddress}
                        setDisplayModalAddress={setDisplayModalAddress}
                    />
                )}
            </Modal>
        </View>
    );
};

export default ModalScreenAddress;
