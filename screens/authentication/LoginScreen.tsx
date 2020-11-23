import React, { FunctionComponent, useRef } from "react";
import {
    View,
    Image,
    Text,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import LoginForm from "../../components/login/LoginForm";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles/Login.style";
import Preload from "./Preload";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ThemedBox, ThemedContainer } from '@components/theme/Theme';
import HeaderFooter from "@components/header/HeaderFooter";
import { calcWidth } from "../../utils/deviceResponsiveHelper";

declare interface LoginScreenProps {
    navigation?: any;
}

const LoginScreen: FunctionComponent<LoginScreenProps> = ({ navigation }) => {
    const preloadRef = useRef(null);
    const { goBack } = useNavigation();

    const navigateRegister = (): void => {
        const { navigate } = navigation;
        navigate("Register");
    };

    const successLogin = (): void => {
        preloadRef.current.preload();
    };

    return (
        <LinearGradient
            colors={["#8FDD3D", "#5CC04A"]}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <SafeAreaView>
                    <TouchableOpacity
                        onPress={(): void => goBack()}
                        style={{
                            marginTop: calcWidth(2),
                            marginLeft: calcWidth(4),
                            marginBottom: calcWidth(5)
                        }}
                    >
                        <Feather name="arrow-left" size={24} color={"white"} />
                    </TouchableOpacity>
                    <View style={styles.imageView}>
                        <Image
                            style={{
                                flex: 1,
                                height: undefined,
                                width: undefined
                            }}
                            source={require("../../assets/images/terradia.png")}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.sloganView}>
                        <Text style={styles.subTitle}>
                            Facilitez votre accès aux produits locaux
                        </Text>
                    </View>
                    <HeaderFooter light={true} />
                    <ThemedBox>
                        <LoginForm
                            navigateRegister={navigateRegister}
                            navigateHome={successLogin}
                        />
                    </ThemedBox>
                    <Preload ref={preloadRef} />
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default LoginScreen;
