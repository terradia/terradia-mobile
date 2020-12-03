import React, { FunctionComponent, ReactElement } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Localization from "expo-localization";
import { Feather, FontAwesome } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import getLocationAsync from "./CurrentPositionResolver";
import { GOOGLE_MAP_API_KEY } from "react-native-dotenv";
import styles from "./styles/ModalScreenAddressSelect.style";
import getAllAddressesByUser from "../../../graphql/getAddressesByUser.graphql";
import { useQuery } from "@apollo/react-hooks";
import getActiveAddress from "../../../graphql/getActiveAddress.graphql";
import {
    Theme,
    ThemedIcon,
    ThemedText,
    withTheme
} from "@components/theme/Theme";

const currentLocation = [
    {
        address: i18n.t("addressModal.currentLocation"),
        currentLocation: true,
        geometry: { location: { lat: 0, lng: 0 } }
    }
];

declare interface ModalScreenAddressSelectProps {
    setIsSearching: any;
    setCurrentAddress: any;
    setDisplayModalAddress: any;
    theme: Theme;
}

const ModalScreenAddressSelect: FunctionComponent<ModalScreenAddressSelectProps> = ({
    setIsSearching,
    setCurrentAddress,
    setDisplayModalAddress,
    theme
}) => {
    const { loading, data } = useQuery(getAllAddressesByUser, {
        fetchPolicy: "cache-first"
    });
    const { data: activeAddress } = useQuery(getActiveAddress, {
        fetchPolicy: "cache-first"
    });
    if (loading || !data) return <View style={styles.mainContainer} />;
    return (
        <View style={styles.mainContainer}>
            <GooglePlacesAutocomplete
                placeholder={i18n.t("searchScreen.search1")}
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={"default"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                keyboardAppearance={"light"} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                listViewDisplayed={true} // true/false/undefined
                fetchDetails={false}
                renderDescription={row => {
                    if (row.isPredefinedPlace) {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    marginLeft: 8,
                                    marginRight: 25
                                }}
                            >
                                {row.currentLocation ? (
                                    <ThemedIcon
                                        icon={
                                            <FontAwesome
                                                name="location-arrow"
                                                size={19}
                                                style={{ paddingRight: 10 }}
                                            />
                                        }
                                    />
                                ) : (
                                    <ThemedIcon
                                        icon={
                                            <Feather
                                                name={
                                                    activeAddress
                                                        .getActiveCustomerAddress
                                                        .id === row.id
                                                        ? "check"
                                                        : "clock"
                                                }
                                                size={19}
                                                style={{
                                                    paddingRight: 10,
                                                    color:
                                                        activeAddress
                                                            .getActiveCustomerAddress
                                                            .id === row.id
                                                            ? "#8FDD3D"
                                                            : theme.palette
                                                                  .fontColor
                                                }}
                                            />
                                        }
                                    />
                                )}
                                <ThemedText
                                    style={{
                                        fontFamily: "Montserrat",
                                        fontSize: 16,
                                        color:
                                            activeAddress
                                                .getActiveCustomerAddress.id ===
                                            row.id
                                                ? "#8FDD3D"
                                                : theme.palette.fontColor
                                    }}
                                >
                                    {row.address}
                                </ThemedText>
                            </View>
                        );
                    } else {
                        return (
                            <ThemedText
                                style={{
                                    fontFamily: "Montserrat",
                                    fontSize: 18
                                }}
                            >
                                {row.description}
                            </ThemedText>
                        );
                    }
                }} // custom description render
                onPress={async data => {
                    if (data.currentLocation) {
                        const addr = await getLocationAsync();
                        setCurrentAddress({
                            address: addr,
                            apartment: "",
                            information: ""
                        });
                        setIsSearching(false);
                    } else {
                        setCurrentAddress({
                            address: data.address || data.description,
                            id: data.isPredefinedPlace ? data.id : null,
                            apartment: data.apartment ? data.apartment : "",
                            information: data.information
                                ? data.information
                                : ""
                        });
                        setIsSearching(false);
                    }
                }}
                getDefaultValue={() => ""}
                currentLocationLabel={"address"}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    types: "address",
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
                    fields: "address_component"
                }}
                predefinedPlaces={currentLocation.concat(
                    data.getAllCustomerAddressesByUser
                )}
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
                <ThemedText style={styles.buttonBack}>
                    {i18n.t("addressModal.back")}
                </ThemedText>
            </TouchableOpacity>
        </View>
    );
};

export default withTheme(ModalScreenAddressSelect);
