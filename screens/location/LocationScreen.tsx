import React, { FunctionComponent, ReactElement, useRef } from 'react';
import { Text, View } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import styles from './styles/LocationScreen.style';
import { Feather, FontAwesome } from '@expo/vector-icons';
import getLocationAsync from '@components/growers/modals/CurrentPositionResolver';
import * as Localization from 'expo-localization';
import i18n from '@i18n/i18n';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from 'react-native-dotenv';
import CreateAddress from '../../graphql/createAddress.graphql';
import Preload from '../authentication/Preload';
import Spinner from 'react-native-loading-spinner-overlay';
import HeaderAccount from '@components/account/Header';
import { useNavigation } from 'react-navigation-hooks';

const currentLocation = [
    {
        address: i18n.t('addressModal.currentLocation'),
        currentLocation: true,
        geometry: { location: { lat: 0, lng: 0 } }
    }
];

const LocationScreen: FunctionComponent = () => {
    const preloadRef = useRef(null);
    const { navigate } = useNavigation();
    const successLogin = (): void => {
        preloadRef.current.preload();
    };
    const [createAddress, { loading }] = useMutation(CreateAddress, {
        onCompleted: () => {
            successLogin();
        }
    });
    return (
        <View style={styles.mainContainer}>
            <HeaderAccount
                title={'Ajouter une adresse'}
                back={(): boolean => navigate('HomeAuth')}
            />
            <Spinner
                visible={loading}
                textContent={i18n.t('loading')}
                textStyle={{ fontFamily: 'MontserratSemiBold' }}
            />
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
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    marginLeft: 8,
                                    marginRight: 25
                                }}
                            >
                                <FontAwesome
                                    name="location-arrow"
                                    size={19}
                                    style={{ paddingRight: 10 }}
                                />
                                <Text
                                    style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: 16,
                                        color: '#202020'
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
                        createAddress({
                            variables: {
                                address: addr,
                                information: '',
                                apartment: '',
                                id: null
                            }
                        });
                    } else {
                        createAddress({
                            variables: {
                                address: data.description,
                                information: '',
                                apartment: '',
                                id: null
                            }
                        });
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
                predefinedPlaces={currentLocation}
                renderLeftButton={(): ReactElement => (
                    <Feather
                        name="search"
                        size={19}
                        style={styles.searchButton}
                    />
                )}
                debounce={40} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
            <Preload ref={preloadRef} />
        </View>
    );
};

export default LocationScreen;
