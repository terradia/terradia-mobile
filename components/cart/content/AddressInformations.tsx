import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../../../assets/svg/map.svg';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        paddingLeft: 10
    },
    textsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    companyName: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
        color: '#575757'
    },
    companyLocation: {
        fontFamily: 'MontserratLight',
        fontSize: 20,
        marginLeft: 5,
        color: '#575757'
    },
    deliveryInformationLabel: {
        fontFamily: 'MontserratLight',
        fontSize: 14,
        position: 'absolute',
        left: -30
    },
    informationContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    informationTextContainer: {
        marginTop: 10
    },
    descriptionContainer: {
        marginTop: 20,
        marginLeft: 10
    },
    textSpacer: {
        marginTop: 14
    },
    informationTextStreet: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: '#575757'
    },
    informationTextAddr: {
        fontFamily: 'MontserratLight',
        fontSize: 14,
        color: '#575757'
    },
    informationTextComment: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
        color: '#8FDD3D'
    }
});

const CartModalContent: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textsContainer}>
                <Text style={styles.companyName}>Ferme Bel Air</Text>
                <Text style={styles.companyLocation}>(Molhheim)</Text>
            </View>
            <View style={styles.informationContainer}>
                <View>
                    <Map />
                </View>
                <View style={styles.informationTextContainer}>
                    <View style={{ position: 'relative' }}>
                        <Text style={styles.deliveryInformationLabel}>
                            Informations de livraion
                        </Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text
                            style={[
                                styles.textSpacer,
                                styles.informationTextStreet
                            ]}
                        >
                            16b Rue du Sanglier
                        </Text>
                        <Text
                            style={[
                                styles.textSpacer,
                                styles.informationTextAddr
                            ]}
                        >
                            Strasbourg, 67000
                        </Text>
                        <Text
                            style={[
                                styles.textSpacer,
                                styles.informationTextAddr
                            ]}
                        >
                            Appartement 9, 3 ème étage
                        </Text>
                        <Text
                            style={[
                                styles.textSpacer,
                                styles.informationTextComment
                            ]}
                        >
                            Ajouter un commentaire
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CartModalContent;
