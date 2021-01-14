import React, { FunctionComponent } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { AirbnbRating, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import style from "./styles/GrowerCard.style";

import { CompanyData } from "@interfaces/Companies";
import i18n from "@i18n/i18n";
import { ThemedBox, ThemedContainer } from "@components/theme/Theme";
import { useNavigation } from "@react-navigation/native";

declare interface GrowerCard {
    grower: CompanyData;
}

const GrowerCard: FunctionComponent<GrowerCard> = ({ grower }) => {
    const { navigate } = useNavigation();
    return (
        <ThemedContainer style={style.mainContainer}>
            <TouchableOpacity
                activeOpacity={Platform.OS === "ios" ? 0.7 : 1}
                style={[style.wrapper, style.shadow1]}
                onPress={(): void =>
                    navigate("GrowersProducts", {
                        grower: grower
                    })
                }
            >
                <Image
                    source={{
                        uri: grower.cover
                            ? "https://media.terradia.eu/" +
                              grower.cover.filename
                            : "https://media.terradia.eu/20b6aef5bacab850344aa3036f8253e6.jpg"
                    }}
                    style={style.backgroundImage}
                />
                <View style={style.brightness} />
                <View style={style.absoluteView}>
                    <View style={style.headerView}>
                        <View style={style.rates}>
                            <AirbnbRating
                                selectedColor={"#FADB14"}
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
                        rounded
                        source={{
                            uri: grower.logo
                                ? "https://media.terradia.eu/" +
                                  grower.logo.filename
                                : "https://media.terradia.eu/004db8bed04bd7fcb8e717611f794ad0.png"
                        }}
                        containerStyle={[style.shadow1, style.growerImage]}
                        imageProps={{ resizeMode: "contain" }}
                    />
                    <View style={style.growerNameContainer}>
                        <Text style={style.growerName}>{grower.name}</Text>
                    </View>
                </View>
                <ThemedBox style={style.bottomView}>
                    <View style={style.bottomElements}>
                        <Text style={style.discoverProducts}>
                            {!grower.numberProducts
                                ? "(9+)"
                                : grower.numberProducts}{" "}
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
                                    {(grower.distance / 1000).toFixed(2) +
                                        " km"}
                                </Text>
                            )}
                            <Text style={style.bottomInformationDistance}>
                                €€
                            </Text>
                        </View>
                    </View>
                </ThemedBox>
            </TouchableOpacity>
        </ThemedContainer>
    );
};

export default GrowerCard;
