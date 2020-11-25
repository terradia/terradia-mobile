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
import { ThemedBox } from "@components/theme/Theme";
import HeaderFooter from "@components/header/HeaderFooter";
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
import i18n from "@i18n/i18n";

declare interface LoginScreenProps {
    navigation?: any;
}

const LoginScreen: FunctionComponent<LoginScreenProps> = ({ navigation }) => {
    const preloadRef = useRef(null);
    const { navigate } = useNavigation();

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
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={(): void => navigate("HomeAuth")}
                        >
                            <Feather
                                name="arrow-left"
                                size={24}
                                color={"white"}
                            />
                        </TouchableOpacity>
                        <ButtonWithIcon
                            onPress={() => navigate("Register")}
                            title={i18n.t("homeAuth.createAccount")}
                            textColor={"white"}
                            textSize={18}
                        />
                    </View>
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
