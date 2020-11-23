import React, { FunctionComponent, ReactElement } from "react";
import { TouchableOpacity, Share } from "react-native";
import styles from "./styles/GrowersProductsHeader.style";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import GrowersProductsCategories from "./GrowersProductsCategories";
import { LinearGradient } from "expo-linear-gradient";
import { CompanyData } from "@interfaces/Companies";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";

interface RenderFixedHeaderData {
    goBack: () => void;
}

export const renderFixedHeader: FunctionComponent<RenderFixedHeaderData> = ({
    goBack
}) => {
    // const { goBack } = useNavigation();
    return (
        <TouchableOpacity
            style={{ top: 40, left: 10, height: 35, position: "absolute" }}
            onPress={(): void => {
                goBack();
            }}
        >
            <FontAwesome
                style={{ margin: 3 }}
                name="arrow-left"
                size={24}
                color="white"
            />
        </TouchableOpacity>
    );
};

declare interface NavBarProductsHeaderProps {
    data: any;
    scrollMainList: any;
    currentIndex: number;
    setBlockUpdateIndex: any;
    setCurrentIndex: any;
    grower: CompanyData;
}

export const renderNavBar: FunctionComponent<NavBarProductsHeaderProps> = ({
    data,
    scrollMainList,
    currentIndex,
    setCurrentIndex,
    setBlockUpdateIndex,
    grower
}) => {
    return (
        <View style={styles.navContainer}>
            <LinearGradient
                colors={["#8FDD3D", "#5CC04A"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.statusBar} />
                <View style={styles.navBar}>
                    <Text style={styles.navBarGrowerName}>{grower.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={async () => {
                                const redirectUrl = Linking.makeUrl(
                                    "products",
                                    {
                                        company: grower.id
                                    }
                                );
                                const result = await Share.share({
                                    message: redirectUrl
                                });
                            }}
                            style={styles.iconsContainer}
                        >
                            <Feather
                                style={styles.shareIcon}
                                name="share"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconsContainer}>
                            <Ionicons
                                style={styles.infoIcon}
                                name="ios-information-circle-outline"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            <LinearGradient
                colors={["#8FDD3D", "#5CC04A"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.categoriesBackground}>
                    <GrowersProductsCategories
                        onPress={(index: number): void => {
                            setBlockUpdateIndex(true);
                            setCurrentIndex(index + 1);
                            scrollMainList(index);
                        }}
                        renderTab={({ title, isActive }): ReactElement => (
                            <View
                                style={[
                                    styles.tabContainer,
                                    {
                                        borderBottomWidth: isActive ? 1.5 : 0,
                                        borderBottomColor: "#8FDD3D"
                                    }
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.tabText,
                                        {
                                            color: isActive
                                                ? "#8FDD3D"
                                                : "#BBBBBB",
                                            fontFamily: "MontserratBold"
                                        }
                                    ]}
                                >
                                    {title.toUpperCase()}
                                </Text>
                            </View>
                        )}
                        sections={data.map((item, index) => ({
                            ...item,
                            index
                        }))}
                        currentIndex={currentIndex}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};

declare interface RenderImageProps {
    grower: CompanyData;
}

export const renderImageBackground: FunctionComponent<RenderImageProps> = ({
    grower
}) => {
    return (
        <View>
            <Image
                source={{
                    uri: grower.cover
                        ? "https://media.terradia.eu/" + grower.cover.filename
                        : "https://media.terradia.eu/20b6aef5bacab850344aa3036f8253e6.jpg",
                    height: 250
                }}
                // source={{
                //     uri: `https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg`,
                // }}
            />
            <View style={styles.brightness} />
        </View>
    );
};
