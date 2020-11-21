import React, { FunctionComponent } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { Avatar } from "react-native-elements";
import style from "./styles/UpcomingCard.style";
import UpcomingCardContent from "./UpcomingCardContent";

import i18n from "@i18n/i18n";
import { useNavigation } from "@react-navigation/native";
import { OrderData } from "@interfaces/Orders";

declare interface GrowerCard {
    order?: OrderData;
}

const UpcomingCardHeader: FunctionComponent<GrowerCard> = ({ order }) => {
    const { navigate } = useNavigation();
    return (
        <View style={style.mainContainer}>
            <View style={[style.wrapper, style.shadow1]}>
                <Image
                    source={{
                        uri: order.company.cover
                            ? "https://media.terradia.eu/" +
                              order.company.cover.filename
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
                            uri: order.company.logo
                                ? "https://media.terradia.eu/" +
                                  order.company.logo.filename
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
                        <Text style={style.growerName}>
                            {order.company.name}
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={(): void =>
                                navigate("GrowersProducts", {
                                    grower: order.company.id
                                })
                            }
                        >
                            <Text style={style.openGrower}>
                                {i18n.t("orders.clickHereToOpen")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.bottomView}>
                    <UpcomingCardContent order={order} />
                </View>
            </View>
        </View>
    );
};

export default UpcomingCardHeader;
