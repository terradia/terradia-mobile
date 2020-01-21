import React, { FunctionComponent, useState } from 'React';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import i18n from '@i18n/i18n';
import InputLightTerradia from '../../input/InputLightTerradia';

declare interface ModalScreenAddressDetailsProps {
    mainAddress: string;
    setDisplayModalAddress: any;
}

const styles = StyleSheet.create({
    inputs: {
        fontSize: 17
    },
    titlesText: {
        fontSize: 20,
        fontFamily: 'MontserratSemiBold'
    },
    mainAddressContainer: {
        height: 32,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1
    },
    mainAddressText: {
        color: '#8FDD3D',
        fontFamily: 'Montserrat',
        fontSize: 17
    },
    containers: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15
    },
    optionsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionsTexts: {
        marginLeft: 5,
        fontSize: 20
    },
    confirmButton: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
        color: '#8FDD3D'
    }
});

const ModalScreenAddressDetails: FunctionComponent<ModalScreenAddressDetailsProps> = ({
    mainAddress,
    setDisplayModalAddress
}) => {
    const [apt, setApt] = useState('');
    const [info, setInfo] = useState('');
    const [optionNumber, setOptionNumber] = useState(0);
    return (
        <View
            style={{
                flex: 1,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <View style={{ flex: 0.9 }}>
                <Text style={styles.titlesText}>Addresse de livraison</Text>
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
                        placeholder={'Apt / Suite / Etage'}
                    />
                    <InputLightTerradia
                        onChangeText={value => setInfo(value)}
                        value={info}
                        style={styles.inputs}
                        placeholder={'Informations supplémentaires'}
                    />
                </View>
                <Text style={styles.titlesText}>Options de livraison</Text>
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
                            Livré à la porte (Précisez l'étage)
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
                            Récupération à l'éxtérieur
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={(): void => setDisplayModalAddress(false)}
                style={{ flex: 0.1 }}
            >
                <Text style={styles.confirmButton}>Confirmer</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ModalScreenAddressDetails;
