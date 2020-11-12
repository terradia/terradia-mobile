import React, { FunctionComponent, ReactElement } from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Welcome from "../../../assets/intro/welcome.svg";
import MyAPP from "../../../assets/intro/my_app.svg";
import OrderConfirmed from "../../../assets/intro/order_confirmed.svg";
import OrderDelivered from "../../../assets/intro/celebration.svg";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue"
    },
    image: {
        width: 320,
        height: 320,
        marginVertical: 32
    },
    text: {
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        fontSize: 17,
        fontFamily: "MontserratMedium"
    },
    title: {
        fontSize: 22,
        color: "white",
        textAlign: "center",
        fontFamily: "MontserratSemiBold"
    },
    buttonCircle: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(0, 0, 0, .2)",
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center"
    }
});

const slides = [
    {
        key: "one",
        title: "Bienvenue sur Terradia",
        text: "L’application qui facilite \nl’accès aux produits locaux",
        image: <Welcome width={320} height={320} />,
        bg: "#59b2ab"
    },
    {
        key: "two",
        title: "Découvrez",
        text: "Découvrez une large liste de producteurs autours de chez vous",
        image: <MyAPP width={320} height={320} />,
        bg: "#e9c46a"
    },
    {
        key: "three",
        title: "Commandez",
        text: "Commandez vos produits préférés",
        image: <OrderConfirmed width={320} height={320} />,
        bg: "#2a9d8f"
    },
    {
        key: "Four",
        title: "Appréciez",
        text: "Appréciez les produits locaux à leur juste valeur",
        image: <OrderDelivered width={320} height={320} />,
        bg: "#e76f51"
    }
];

interface IntroSliderData {
    onSliderDone: () => void;
}

const IntroSlider: FunctionComponent<IntroSliderData> = ({ onSliderDone }) => {
    const _onSliderEnded = (): void => {
        onSliderDone();
    };

    const _renderItem = ({ item }): ReactElement => {
        return (
            <View
                style={[
                    styles.slide,
                    {
                        backgroundColor: item.bg
                    }
                ]}
            >
                <Text style={styles.title}>{item.title}</Text>
                {item.image}
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-arrow-round-forward"
                    size={24}
                    color="rgba(255, 255, 255, .9)"
                />
            </View>
        );
    };

    const _renderPrevButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-arrow-round-back"
                    size={24}
                    color="rgba(255, 255, 255, .9)"
                />
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-checkmark"
                    size={24}
                    color="rgba(255, 255, 255, .9)"
                />
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <AppIntroSlider
                skipLabel={"Passer"}
                doneLabel={"Fini"}
                nextLabel={"Suivant"}
                prevLabel={"Précédent"}
                showSkipButton
                showPrevButton
                renderNextButton={_renderNextButton}
                renderDoneButton={_renderDoneButton}
                renderPrevButton={_renderPrevButton}
                renderItem={_renderItem}
                data={slides}
                onDone={_onSliderEnded}
            />
        </View>
    );
};

export default IntroSlider;
