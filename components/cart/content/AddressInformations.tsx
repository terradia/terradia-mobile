import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../../../assets/svg/map.svg';
import styles from './styles/AddressInformations.style';

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
