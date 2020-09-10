import React, { FunctionComponent } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { AirbnbRating, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import style from "./styles/GrowerCard.style";
import { NavigationParams } from "react-navigation";

import { CompanyData } from "@interfaces/Companies";
import i18n from "@i18n/i18n";

declare interface GrowerCard {
    navigation?: NavigationParams;
    grower?: CompanyData;
}

const GrowerCard: FunctionComponent<GrowerCard> = ({ navigation, grower }) => {
    return (
        <View style={style.mainContainer}>
            <TouchableOpacity
                activeOpacity={Platform.OS === "ios" ? 0.7 : 1}
                style={[style.wrapper, style.shadow1]}
                onPress={(): void =>
                    navigation.navigate("GrowersProducts", {
                        grower: grower.id
                    })
                }
            >
                <Image
                    source={{
                        uri: grower.cover ? "https://media.terradia.eu/" + grower.cover.filename : "https://media.terradia.eu/20b6aef5bacab850344aa3036f8253e6.jpg"
                    }}
                    style={style.backgroundImage}
                />
                <View style={style.brightness} />
                <View style={style.absoluteView}>
                    <View style={style.headerView}>
                        <View style={style.rates}>
                            <AirbnbRating
                                selectedColor={"white"}
                                defaultRating={grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                            />
                            <Text style={style.textNumberRates}>
                                {grower.numberOfMarks > 99
                                    ? "(99+)"
                                    : "(" + grower.numberOfMarks + ")"}
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <AntDesign
                                style={[{ margin: 2 }, style.shadow1]}
                                name="heart"
                                size={24}
                                color="#60C34A"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.growerImageContainer}>
                    <Avatar
                        size={100}
                        rounded
                        source={{
                            uri: grower.logo ? "https://media.terradia.eu/" + grower.logo.filename : "https://media.terradia.eu/e54c3df65d050d30b1bd7dda18bd3a36.jpg"                        }}
                        containerStyle={[style.shadow1, style.growerImage]}
                    />
                    <Text style={style.growerName}>{grower.name}</Text>
                </View>
                <View style={style.bottomView}>
                    <View style={style.bottomElements}>
                        <Text style={style.discoverProducts}>
                            {grower.products.length > 9
                                ? "(9+)"
                                : grower.products.length}{" "}
                            {i18n.t("growersCard.productsToDiscover")}
                        </Text>
                        <View style={style.bottomInformation}>
                            <View style={style.tag}>
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: "500"
                                    }}
                                >
                                    {i18n.t("tags.new")}
                                </Text>
                            </View>
                            {grower.distance && (
                                <Text style={style.bottomInformationDistance}>
                                    ~{grower.distance.toFixed(2) + " km"}
                                </Text>
                            )}
                            <Text style={style.bottomInformationDistance}>
                                €€
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default GrowerCard;
