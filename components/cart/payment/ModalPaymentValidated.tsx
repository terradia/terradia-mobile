import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import styles from "./style/ModalPaymentValidated";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import i18n from "@i18n/i18n";

declare interface ModalPaymentValidatedProps {
    setIsValidated: (boolean) => void;
}

const ModalPaymentValidated: FunctionComponent<ModalPaymentValidatedProps> = ({
    setIsValidated
}) => {
    const lottieRef = useRef(null);
    const { navigate } = useNavigation();

    useEffect(() => {
        lottieRef.current.play();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {i18n.t("cart.orderAccepted")}
                </Text>
                <LottieView
                    ref={lottieRef}
                    loop={false}
                    onAnimationFinish={(): void => {
                        setIsValidated(false);
                        navigate("Orders");
                    }}
                    style={styles.lottieAnimation}
                    source={require("../../../assets/json/33028-input-validation-correct.json")}
                />
            </View>
        </View>
    );
};

export default ModalPaymentValidated;
