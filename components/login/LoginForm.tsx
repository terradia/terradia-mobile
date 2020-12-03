import React, { FunctionComponent, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonTerradia from "../buttons/ButtonTerradia";
import ButtonEmpty from "../buttons/Button";
import styles from "./styles/LoginForm.style";
import { useMutation } from "@apollo/react-hooks";
import i18n from "@i18n/i18n";
import LOGIN from "../../graphql/login.graphql";
import ThirdPartyLogin from "@components/login/ThirdPartyLogin";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Kohana } from "react-native-textinput-effects";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerForPushNotificationsAsync } from "@helpers/pushNotification";
import { ThemedBox, ThemedContainer, withTheme } from '@components/theme/Theme';
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
import { Divider } from "react-native-elements";

declare interface LoginFormProps {
    navigateRegister?: any;
    navigateHome?: () => void;
    theme?: any;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({
    navigateHome,
    navigateRegister,
    theme,
}) => {
    const { navigate } = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onCompletedHandler = (data): void => {
        AsyncStorage.setItem("token", data.login.token).then();
        AsyncStorage.setItem("userId", data.login.userId).then();
        navigateHome();
    };

    const onErrorHandler = (error): void => {
        setError(i18n.t("loginScreen.invalidLogin"));
    };

    const [login, { loading: mutationLoading }] = useMutation(LOGIN, {
        onError: error => {
            onErrorHandler(error);
        },
        onCompleted: data => {
            onCompletedHandler(data);
        }
    });

    /*
    Renvoyer vers la page de mot de passe oublié
     */
    const forgotPassword = (): void => {
        navigate("AccountRecovery");
    };

    /*
    Renvoyer vers la page register
     */
    const register = (): void => {
        navigateRegister();
    };

    /*
    FACEBOOK
    */
    const facebookLogin = (): void => {
        console.log("Facebook login");
    };

    /*
    APPLE
    */
    const appleLogin = (): void => {
        console.log("Apple login");
    };

    const onPressLogin = async (): Promise<void> => {
        if (email.length === 0) {
            setError(i18n.t("loginScreen.fillEmail"));
            return;
        }
        if (password.length === 0) {
            setError(i18n.t("loginScreen.fillPassword"));
            return;
        }
        const token = await registerForPushNotificationsAsync();
        login({
            variables: {
                email: email,
                password: password,
                exponentPushToken: token
            }
        }).then();
    };

    return (
        <ThemedBox style={styles.container}>
            <ThemedBox style={styles.wrapper}>
                <ThemedBox style={styles.containerView}>
                    <Kohana
                        style={styles.inputContainer}
                        label={i18n.t("registerScreen.addrEmail")}
                        keyboardType={"email-address"}
                        onChangeText={(text: string): void => setEmail(text)}
                        iconClass={FontAwesome}
                        iconName={"envelope"}
                        iconColor={"#8FDD3D"}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={{
                            color: theme.palette.fontColor,
                            fontFamily: "Montserrat"
                        }}
                        labelContainerStyle={{ padding: calcWidth(2) }}
                        iconContainerStyle={{
                            padding: calcWidth(2),
                            width: calcWidth(10)
                        }}
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={i18n.t("registerScreen.password")}
                        onChangeText={(text: string): void => setPassword(text)}
                        iconClass={FontAwesome}
                        iconName={"lock"}
                        secureTextEntry={true}
                        iconColor={"#8FDD3D"}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={{
                            color: theme.palette.fontColor,
                            fontFamily: "Montserrat"
                        }}
                        labelContainerStyle={{ padding: calcWidth(2) }}
                        iconContainerStyle={{
                            padding: calcWidth(2),
                            width: calcWidth(10)
                        }}
                    />
                </ThemedBox>
                <Text style={styles.errorText}>{error}</Text>
                <ButtonWithIcon
                    title={i18n.t("loginScreen.login")}
                    onPress={onPressLogin}
                    radius={8}
                    loading={mutationLoading}
                    type={"full"}
                    width={calcWidth(92)}
                    size={50}
                    textSize={20}
                    style={{
                        marginBottom: calcWidth(3)
                    }}
                />
                <ButtonWithIcon
                    onPress={forgotPassword}
                    type={"clear"}
                    title={i18n.t("loginScreen.forgot")}
                    width={calcWidth(92)}
                    size={50}
                    textSize={20}
                    style={{
                        marginBottom: calcWidth(3)
                    }}
                />
            </ThemedBox>

            <ThemedBox style={styles.registerView}>
                <ButtonWithIcon
                    onPress={register}
                    type={"outline"}
                    radius={8}
                    title={i18n.t("loginScreen.register")}
                    width={calcWidth(92)}
                    size={50}
                    textSize={20}
                    style={{
                        marginBottom: calcWidth(3)
                    }}
                />
                <ThirdPartyLogin navigateHome={navigateHome} />
                {/*<ButtonEmpty*/}
                {/*    title={i18n.t('loginScreen.loginApple')}*/}
                {/*    style={[{ borderColor: 'black' }]}*/}
                {/*    titleStyle={[{ color: 'black' }]}*/}
                {/*    onPress={appleLogin}*/}
                {/*/>*/}
            </ThemedBox>
        </ThemedBox>
    );
};

export default withTheme(LoginForm);
