import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/AddressInformations.style';
import { CartData, CustomerAddressData } from '@interfaces/User';
import MapView, { Circle, Marker } from 'react-native-maps';
import i18n from '@i18n/i18n';
import { useQuery } from '@apollo/react-hooks';
import getActiveAddress from '../../../graphql/getActiveAddress.graphql';
import ModalScreenAddress from '@components/growers/modals/ModalScreenAddress';

declare interface CartContent {
    cart: CartData;
}

const CartContent: FunctionComponent<CartContent> = ({ cart }) => {
    const [isModalAddressOpen, setDisplayModalAddress] = useState(false);
    const { data: activeAddress } = useQuery<{
        getActiveCustomerAddress: CustomerAddressData;
    }>(getActiveAddress, {
        fetchPolicy: 'cache-only'
    });

    return (
        <View style={styles.container}>
            <ModalScreenAddress
                isOpen={isModalAddressOpen}
                setDisplayModalAddress={setDisplayModalAddress}
            />
            <View style={styles.textsContainer}>
                <Text style={styles.companyName}>{cart.company.name}</Text>
                {/*÷<Text style={styles.companyLocation}>(Molhheim)</Text>*/}
            </View>
            <View style={{ position: 'relative' }}>
                <Text style={styles.deliveryInformationLabel}>
                    {i18n.t('cart.deliveryInformation')}
                </Text>
            </View>
            <View style={styles.informationContainer}>
                <MapView
                    style={styles.mapStyle}
                    scrollEnabled={false}
                    zoomEnabled={false}
                    region={{
                        latitude:
                            activeAddress.getActiveCustomerAddress.location.coordinates[1],
                        longitude:
                            activeAddress.getActiveCustomerAddress.location.coordinates[0],
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0021
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude:
                                activeAddress.getActiveCustomerAddress.location
                                    .coordinates[1],
                            longitude:
                                activeAddress.getActiveCustomerAddress.location
                                    .coordinates[0]
                        }}
                        pinColor={'#8FDD3D'}
                    />
                </MapView>
                <View style={styles.informationTextContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setDisplayModalAddress(true);
                        }}
                        activeOpacity={0.7}
                        style={styles.descriptionContainer}
                    >
                        <Text
                            style={[
                                styles.textSpacer,
                                styles.informationTextStreet
                            ]}
                        >
                            {activeAddress &&
                                activeAddress.getActiveCustomerAddress &&
                                activeAddress.getActiveCustomerAddress.address}
                        </Text>
                        <Text
                            style={[
                                styles.textSpacer,
                                styles.informationTextAddr
                            ]}
                        >
                            {activeAddress.getActiveCustomerAddress.apartment}
                        </Text>
                        <Text
                            style={[
                                styles.textSpacer,
                                styles.informationTextComment
                            ]}
                        >
                            {activeAddress.getActiveCustomerAddress.information
                                ? activeAddress.getActiveCustomerAddress
                                      .information
                                : 'Ajouter un commentaire'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartContent;
