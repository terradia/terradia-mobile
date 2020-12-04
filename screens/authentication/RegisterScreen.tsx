import React, { FunctionComponent, useRef } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import styles from "./styles/Login.style";
import { LinearGradient } from "expo-linear-gradient";
import RegisterForm from "../../components/register/RegisterForm";
import Preload from "./Preload";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderFooter from '@components/header/HeaderFooter';
import { calcWidth } from '../../utils/deviceResponsiveHelper';
import { ButtonWithIcon } from '@components/buttons/ButtonWithIcon';
import i18n from "@i18n/i18n";

const RegisterScreen: FunctionComponent<any> = props => {
    const preloadRef = useRef(null);
    const successLogin = (): void => {
        preloadRef.current.preload();
    };
    const { navigate } = useNavigation();

    return (
        <LinearGradient
            colors={["#8FDD3D", "#5CC04A"]}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <KeyboardAwareScrollView>
                <SafeAreaView>
                    <View style={styles.headerContainer}>
                        {/*<TouchableOpacity*/}
                        {/*    onPress={(): void => navigate("HomeAuth")}*/}
                        {/*>*/}
                        {/*    <Feather*/}
                        {/*        name="arrow-left"*/}
                        {/*        size={24}*/}
                        {/*        color={"white"}*/}
                        {/*    />*/}
                        {/*</TouchableOpacity>*/}
                        <ButtonWithIcon
                            onPress={() => navigate("Login")}
                            title={i18n.t("homeAuth.alreadyHaveAnAccount")}
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
                    <View>
                        <HeaderFooter light={true} />
                        <RegisterForm navigateHome={successLogin} />
                    </View>
                </SafeAreaView>
                <Preload ref={preloadRef} />
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};

export default RegisterScreen;
