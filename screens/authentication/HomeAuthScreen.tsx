import React, { FunctionComponent, useEffect, useState } from "react";
import {
    ImageBackground,
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from "react-native";
import TerradiaWhite from "../../assets/svg/terradia_white.svg";
import ButtonTerradia from "@components/buttons/ButtonTerradia";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import i18n from "@i18n/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IntroSlider from "./intro/IntroSlider";

const styles = StyleSheet.create({
    title: {
        marginTop: 20
    },
    safeArea: {
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    subTitle: {
        color: "white",
        fontFamily: "MontserratSemiBold",
        marginTop: 30,
        fontSize: 18,
        margin: 20,
        textAlign: "center",
        lineHeight: 25
    },
    brightness: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, .4)"
    },
    containers: {
        alignItems: "center"
    },
    bottomContainer: {
        marginBottom: 20
    }
});

const HomeAuthScreen: FunctionComponent = () => {
    const firstConnection = useNavigationParam("firstConnection");
    const [showSlider, setShowSlider] = useState(!firstConnection);

    const _onSliderDone = async (): Promise<void> => {
        await AsyncStorage.setItem("@first_connection", "true");
        setShowSlider(false);
    };

    const { navigate } = useNavigation();

    if (showSlider) {
        return <IntroSlider onSliderDone={_onSliderDone} />;
    }
    return (
        <ImageBackground
            source={require("../../assets/images/background.jpg")}
            style={{ flex: 1 }}
        >
            <View style={styles.brightness}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.containers}>
                        <TerradiaWhite style={styles.title} />
                        <Text style={styles.subTitle}>
                            L’application qui facilite l’accès aux produits
                            locaux
                        </Text>
                    </View>
                    <View style={[styles.containers, styles.bottomContainer]}>
                        <ButtonTerradia
                            title={i18n.t("homeAuth.joinTerradia")}
                            style={[{ borderColor: "transparent", width: 300 }]}
                            titleStyle={[
                                {
                                    color: "#FFFFFF",
                                    fontFamily: "MontserratSemiBold"
                                }
                            ]}
                            loading={false}
                            onPress={(): void => {
                                navigate("Register");
                            }}
                        />
                        <TouchableOpacity
                            onPress={(): void => {
                                navigate("Login");
                            }}
                        >
                            <Text style={styles.subTitle}>
                                {i18n.t("homeAuth.alreadyHaveAnAccount")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
};

export default HomeAuthScreen;
