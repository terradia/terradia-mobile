import React, { FunctionComponent, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import styles from "./style/ModalPaymentValidated";
import LottieView from "lottie-react-native";
import { useNavigation } from "react-navigation-hooks";

declare interface ModalPaymentValidatedProps {
    setIsValidated: (boolean) => void;
}

const ModalPaymentValidated: FunctionComponent<ModalPaymentValidatedProps> = ({setIsValidated}) => {
    const lottieRef = useRef(null);
    const { navigate } = useNavigation();
    useEffect(() => {
        lottieRef.current.play();
    }, []);
    return (
        <View
            style={{
                backgroundColor: "#F3F3F3",
                height: 350,
                justifyContent: "space-between",
                borderRadius: 10,
                paddingTop: 5
            }}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Votre commande a été acceptée
                </Text>
                <LottieView
                    ref={lottieRef}
                    loop={false}
                    onAnimationFinish={(): boolean => {
                        console.log("Animations términée");
                        setIsValidated(false);
                        navigate("Orders");
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "transparent"
                    }}
                    source={require("../../../assets/json/33028-input-validation-correct.json")}
                    // OR find more Lottie files @ https://lottiefiles.com/featured
                    // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                />
            </View>
        </View>
    );
};

export default ModalPaymentValidated;
