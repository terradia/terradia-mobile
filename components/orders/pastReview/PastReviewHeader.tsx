import React, { FunctionComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./styles/PastReviewHeader.style";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import i18n from "@i18n/i18n";
import { Feather } from "@expo/vector-icons";
import { OrderHistoryData } from "@interfaces/Orders";

declare interface UpcomingReviewHeaderData {
    order: OrderHistoryData;
}

const UpcomingReviewHeader: FunctionComponent<UpcomingReviewHeaderData> = ({
    order
}) => {
    const { goBack } = useNavigation();
    return (
        <View style={{ zIndex: 10 }}>
            <Image
                source={{
                    uri:
                        "https://media.terradia.eu/20b6aef5bacab850344aa3036f8253e6.jpg"
                }}
                style={style.backgroundImage}
            />
            <View style={style.brightness} />
            <View style={style.headerTitleContainer}>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20
                    }}
                >
                    <TouchableOpacity onPress={(): void => goBack()}>
                        <Feather name="arrow-left" size={28} color={"white"} />
                    </TouchableOpacity>
                    <Text style={style.growerName}>
                        {i18n.t("orders.myReceipt") + " #" + order.code}
                    </Text>
                </View>
                <Avatar
                    size={110}
                    rounded
                    source={{
                        uri: order.companyLogo
                            ? "https://media.terradia.eu/" + order.companyLogo
                            : "https://media.terradia.eu/004db8bed04bd7fcb8e717611f794ad0.png"
                    }}
                    containerStyle={[style.shadow1, style.growerImage]}
                    imageProps={{ resizeMode: "contain" }}
                />
                <View style={style.orderCodeContainer}>
                    <Text style={style.orderCodeText}>
                        {"#" + order.code.toUpperCase()}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default UpcomingReviewHeader;
