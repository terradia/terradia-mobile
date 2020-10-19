import React, { FunctionComponent } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import style from "./styles/UpcomingCard.style";
import { NavigationParams } from "react-navigation";
import UpcomingCardContent from "./UpcomingCardContent";

import { CompanyData } from "@interfaces/Companies";
import i18n from "@i18n/i18n";
import { useNavigation } from "react-navigation-hooks";

declare interface GrowerCard {
    navigation?: NavigationParams;
    grower?: any;
}

const UpcomingCardHeader: FunctionComponent<GrowerCard> = ({ grower }) => {
    const { navigate } = useNavigation();
    return (
        <View style={style.mainContainer}>
            <View style={[style.wrapper, style.shadow1]}>
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
                <View style={style.growerImageContainer}>
                    <Avatar
                        size={100}
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
                    <View
                        style={{
                            flexDirection: "column",
                            marginLeft: 10,
                            marginTop: 10
                        }}
                    >
                        <Text style={style.growerName}>Au brasseur</Text>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={(): boolean =>
                                navigate("GrowersProducts", {
                                    grower: grower.id
                                })
                            }
                        >
                            <Text style={style.openGrower}>
                                Cliquer ici pour afficher le producteur
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.bottomView}>
                    <UpcomingCardContent />
                </View>
            </View>
        </View>
    );
};

export default UpcomingCardHeader;
