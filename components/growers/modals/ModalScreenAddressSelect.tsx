import React, { FunctionComponent } from 'React';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Localization from 'expo-localization';
import { Feather, FontAwesome } from '@expo/vector-icons';
import i18n from '@i18n/i18n';
import getLocationAsync from './CurrentPositionResolver';

const homePlace = {
    description: '850 Village drive',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
    description: '4 rue du dome',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};
const currentLocation = {
    description: 'Current Location',
    currentLocation: true,
    geometry: { location: { lat: 0, lng: 0 } }
};

// const currentLocation = getLocationAsync();

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
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between'
            }}
        >
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
                                    {row.description}
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
                onPress={async (data, details = null) => {
                    if (data.currentLocation) {
                        const addr = await getLocationAsync();
                        setCurrentAddress(addr);
                        setIsSearching(false);
                    } else {
                        setCurrentAddress(data.description);
                        setIsSearching(false);
                    }
                }}
                getDefaultValue={() => ''}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    types: 'address',
                    language: Localization.locale, // language of the results
                    key: ''
                }}
                styles={{
                    container: {
                        width: '100%',
                        flex: 0.9
                    },
                    listView: {
                        elevation: 1
                    },
                    textInputContainer: {
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: '#ECECEC',
                        borderTopColor: 'transparent',
                        borderBottomColor: 'transparent',
                        marginBottom: 10
                    },
                    textInput: {
                        height: 45,
                        color: '#424242',
                        fontFamily: 'Montserrat',
                        backgroundColor: 'transparent'
                    },
                    description: {
                        fontWeight: 'bold'
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                        height: 'auto',
                        paddingTop: 10,
                        paddingBottom: 10
                    },
                    placesDescription: {
                        height: 'auto',
                        paddingTop: 7,
                        paddingBottom: 7
                    },
                    row: {
                        height: 'auto',
                        paddingTop: 0,
                        paddingBottom: 0
                    },
                    separator: {
                        height: 0,
                        backgroundColor: 'white'
                    }
                }}
                currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GooglePlacesSearchQuery={{}}
                GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: 'address_component'
                }}
                predefinedPlaces={[currentLocation, homePlace, workPlace]}
                renderLeftButton={() => (
                    <Feather
                        name="search"
                        size={19}
                        style={{ paddingLeft: 10 }}
                    />
                )}
                debounce={40} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
            <TouchableOpacity
                onPress={() => setDisplayModalAddress(false)}
                style={{ flex: 0.1, alignItems: 'center' }}
            >
                <Text
                    style={{
                        fontFamily: 'MontserratSemiBold',
                        fontSize: 20,
                        color: '#575757'
                    }}
                >
                    {i18n.t('addressModal.back')}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ModalScreenAddressSelect;
