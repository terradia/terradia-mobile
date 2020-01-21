import React, { FunctionComponent, useState } from 'React';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
// @ts-ignore
import i18n from '@i18n/i18n';
import InputLightTerradia from '../../input/InputLightTerradia';
import styles from './styles/ModalScreenAddressDetails.style';

declare interface ModalScreenAddressDetailsProps {
    mainAddress: string;
    setDisplayModalAddress: any;
}

const ModalScreenAddressDetails: FunctionComponent<ModalScreenAddressDetailsProps> = ({
    mainAddress,
    setDisplayModalAddress
}) => {
    const [apt, setApt] = useState('');
    const [info, setInfo] = useState('');
    const [optionNumber, setOptionNumber] = useState(0);
    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 0.9 }}>
                <Text style={styles.titlesText}>
                    {i18n.t('addressModal.deliveryAddress')}
                </Text>
                <View style={styles.containers}>
                    <View style={styles.mainAddressContainer}>
                        <Text style={styles.mainAddressText} numberOfLines={1}>
                            {mainAddress}
                        </Text>
                    </View>
                    <InputLightTerradia
                        onChangeText={value => setApt(value)}
                        value={apt}
                        style={styles.inputs}
                        placeholder={i18n.t('addressModal.apt')}
                    />
                    <InputLightTerradia
                        onChangeText={value => setInfo(value)}
                        value={info}
                        style={styles.inputs}
                        placeholder={i18n.t('addressModal.deliveryNotes')}
                    />
                </View>
                <Text style={styles.titlesText}>
                    {i18n.t('addressModal.deliveryOptions')}
                </Text>
                <View style={styles.containers}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={(): void => setOptionNumber(0)}
                        style={[
                            styles.optionsContainer,
                            {
                                marginBottom: 10
                            }
                        ]}
                    >
                        <Feather
                            name="home"
                            size={19}
                            style={{
                                color:
                                    optionNumber === 0 ? '#8FDD3D' : '#202020'
                            }}
                        />
                        <Text
                            style={[
                                styles.optionsTexts,
                                {
                                    color:
                                        optionNumber === 0
                                            ? '#8FDD3D'
                                            : '#202020'
                                }
                            ]}
                        >
                            {i18n.t('addressModal.deliverToDoor')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={(): void => setOptionNumber(1)}
                        style={styles.optionsContainer}
                    >
                        <Feather
                            name="truck"
                            size={19}
                            style={{
                                color:
                                    optionNumber === 1 ? '#8FDD3D' : '#202020'
                            }}
                        />
                        <Text
                            style={[
                                styles.optionsTexts,
                                {
                                    color:
                                        optionNumber === 1
                                            ? '#8FDD3D'
                                            : '#202020'
                                }
                            ]}
                        >
                            {i18n.t('addressModal.pickUpOutside')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={(): void => setDisplayModalAddress(false)}
                style={styles.applyButtonContainer}
            >
                <Text style={styles.confirmButton}>
                    {i18n.t('addressModal.confirm')}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ModalScreenAddressDetails;
