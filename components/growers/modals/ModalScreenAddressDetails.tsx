import React, { FunctionComponent, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import i18n from '@i18n/i18n';
import InputLightTerradia from '../../input/InputLightTerradia';
import styles from './styles/ModalScreenAddressDetails.style';
import { useMutation } from '@apollo/react-hooks';
import CreateAddress from '../../../graphql/createAddress.graphql';
import getActiveAddress from '../../../graphql/getActiveAddress.graphql';
import Spinner from 'react-native-loading-spinner-overlay';
import getAddressesByUser from '../../../graphql/getAddressesByUser.graphql';

declare interface ModalAddressProps {
    address: string;
    id: string;
}

declare interface ModalScreenAddressDetailsProps {
    mainAddress: ModalAddressProps;
    setDisplayModalAddress: any;
}

const ModalScreenAddressDetails: FunctionComponent<ModalScreenAddressDetailsProps> = ({
    mainAddress,
    setDisplayModalAddress
}) => {
    const [createAddress, { data, loading, client }] = useMutation(
        CreateAddress,
        {
            onCompleted: () => {
                client.query({
                    query: getAddressesByUser,
                    fetchPolicy: 'network-only'
                });
                client.query({
                    query: getActiveAddress,
                    fetchPolicy: 'network-only'
                });
                setDisplayModalAddress(false);
            }
        }
    );

    const [apt, setApt] = useState('');
    const [info, setInfo] = useState('');
    const [optionNumber, setOptionNumber] = useState(0);
    return (
        <View style={styles.mainContainer}>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={{}}
            />
            <View style={{ flex: 0.9 }}>
                <Text style={styles.titlesText}>
                    {i18n.t('addressModal.deliveryAddress')}
                </Text>
                <View style={styles.containers}>
                    <View style={styles.mainAddressContainer}>
                        <Text style={styles.mainAddressText} numberOfLines={1}>
                            {mainAddress.address}
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
                onPress={(): void => {
                    createAddress({
                        variables: {
                            address: mainAddress.address,
                            information: info,
                            apartment: apt,
                            id: mainAddress.id || null
                        }
                    }).then(() => {});
                }}
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
