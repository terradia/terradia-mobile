import React, { FunctionComponent, ReactElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Localization from 'expo-localization';
import { Feather, FontAwesome } from '@expo/vector-icons';
import i18n from '@i18n/i18n';
import getLocationAsync from './CurrentPositionResolver';
import { GOOGLE_MAP_API_KEY } from 'react-native-dotenv';
import styles from './styles/ModalScreenAddressSelect.style';
import getAllAddressesByUser from '../../../graphql/getAddressesByUser.graphql';
import { useQuery } from '@apollo/react-hooks';

const currentLocation = [
    {
        address: 'Current Location',
        currentLocation: true,
        geometry: { location: { lat: 0, lng: 0 } }
    }
];

declare interface ModalScreenAddressSelectProps {
    setIsSearching: any;
    setCurrentAddress: any;
    setDisplayModalAddress: any;
}

const ModalScreenAddressSelect: FunctionComponent<ModalScreenAddressSelectProps> = ({
    setIsSearching,
    setCurrentAddress,
    setDisplayModalAddress
}) => {
    const { loading, data } = useQuery(getAllAddressesByUser, {
        fetchPolicy: 'cache-first'
    });
    if (loading || !data) return <View style={styles.mainContainer} />;
    return (
        <View style={styles.mainContainer}>
            <GooglePlacesAutocomplete
                placeholder={i18n.t('searchScreen.search1')}
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'default'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                listViewDisplayed={true} // true/false/undefined
                fetchDetails={false}
                renderDescription={row => {
                    if (row.isPredefinedPlace) {
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                {row.currentLocation ? (
                                    <FontAwesome
                                        name="location-arrow"
                                        size={19}
                                        style={{ paddingRight: 10 }}
                                    />
                                ) : (
                                    <Feather
                                        name="clock"
                                        size={19}
                                        style={{ paddingRight: 10 }}
                                    />
                                )}
                                <Text
                                    style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: 20
                                    }}
                                >
                                    {row.address}
                                </Text>
                            </View>
                        );
                    } else {
                        return (
                            <Text
                                style={{
                                    fontFamily: 'Montserrat',
                                    fontSize: 18
                                }}
                            >
                                {row.description}
                            </Text>
                        );
                    }
                }} // custom description render
                onPress={async data => {
                    if (data.currentLocation) {
                        const addr = await getLocationAsync();
                        setCurrentAddress(addr);
                        setIsSearching(false);
                    } else {
                        console.log('data');
                        console.log(data);
                        setCurrentAddress({
                            address: data.address || data.description,
                            id: data.isPredefinedPlace ? data.id : null
                        });
                        setIsSearching(false);
                    }
                }}
                getDefaultValue={() => ''}
                currentLocationLabel={'address'}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    types: 'address',
                    language: Localization.locale, // language of the results
                    key: GOOGLE_MAP_API_KEY
                }}
                styles={{
                    container: styles.container,
                    listView: styles.listView,
                    textInputContainer: styles.textInputContainer,
                    textInput: styles.textInput,
                    description: styles.description,
                    predefinedPlacesDescription:
                        styles.predefinedPlacesDescription,
                    placesDescription: styles.placesDescription,
                    row: styles.row,
                    separator: styles.separator
                }}
                currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GooglePlacesSearchQuery={{}}
                GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: 'address_component'
                }}
                predefinedPlaces={data.getAllAddressesByUser}
                renderLeftButton={(): ReactElement => (
                    <Feather
                        name="search"
                        size={19}
                        style={styles.searchButton}
                    />
                )}
                debounce={40} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
            <TouchableOpacity
                onPress={(): void => setDisplayModalAddress(false)}
                style={styles.buttonBackContainer}
            >
                <Text style={styles.buttonBack}>
                    {i18n.t('addressModal.back')}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ModalScreenAddressSelect;
