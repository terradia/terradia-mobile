import React, { FunctionComponent, useState } from 'React';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import ModalScreenAddressSelect from './ModalScreenAddressSelect';
import { Feather } from '@expo/vector-icons';
import ModalScreenAddressDetails from './ModalScreenAddressDetails';
import i18n from '@i18n/i18n';

declare interface ModalScreenAddressSelectProps {
    isOpen: boolean;
    setDisplayModalAddress: any;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContainer: {
        alignItems: 'flex-start',
        margin: 0,
        marginTop: 80,
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

const ModalScreenAddress: FunctionComponent<ModalScreenAddressSelectProps> = ({
    isOpen,
    setDisplayModalAddress
}) => {
    const [isSearching, setIsSearching] = useState(true);
    const [currentAddress, setCurrentAddress] = useState(null);
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <Modal
                isVisible={isOpen}
                style={styles.modalContainer}
                onSwipeComplete={() => setDisplayModalAddress(false)}
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
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'MontserratBold'
                        }}
                    >
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
