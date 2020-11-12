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
import { useNavigation } from "react-navigation-hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

declare interface LoginFormProps {
    navigateRegister?: any;
    navigateHome?: () => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({
    navigateHome,
    navigateRegister
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

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.containerView}>
                    <Kohana
                        style={styles.inputContainer}
                        label={i18n.t("registerScreen.addrEmail")}
                        keyboardType={"email-address"}
                        onChangeText={(text: string): void => setEmail(text)}
                        iconClass={MaterialIcons}
                        iconName={"email"}
                        iconColor={"#8FDD3D"}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={styles.inputStyle}
                        labelContainerStyle={{ padding: 10 }}
                        iconContainerStyle={{ padding: 10 }}
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
                        inputStyle={styles.inputStyle}
                        labelContainerStyle={{ padding: 10 }}
                        iconContainerStyle={{ padding: 10 }}
                    />
                </View>
                <Text style={styles.errorText}>{error}</Text>
                <ButtonTerradia
                    title={i18n.t("loginScreen.login")}
                    style={[{ borderColor: "#FFFFFF" }]}
                    titleStyle={[{ color: "#FFFFFF" }]}
                    loading={mutationLoading}
                    onPress={(): void => {
                        if (email.length === 0) {
                            setError(i18n.t("loginScreen.fillEmail"));
                            return;
                        }
                        if (password.length === 0) {
                            setError(i18n.t("loginScreen.fillPassword"));
                            return;
                        }
                        login({
                            variables: { email: email, password: password }
                        }).then();
                    }}
                />
            </View>

            <TouchableOpacity
                onPress={forgotPassword}
                style={styles.forgotPasswordStyle}
            >
                <Text style={styles.forgotPasswordText}>
                    {i18n.t("loginScreen.forgot")}
                </Text>
            </TouchableOpacity>

            <View style={styles.registerView}>
                <ButtonEmpty
                    title={i18n.t("loginScreen.register")}
                    style={[{ borderColor: "#5CC04A" }]}
                    titleStyle={[{ color: "#5CC04A" }]}
                    onPress={register}
                />
                <ThirdPartyLogin navigateHome={navigateHome} />
                {/*<ButtonEmpty*/}
                {/*    title={i18n.t('loginScreen.loginFacebook')}*/}
                {/*    style={[{ borderColor: 'blue' }]}*/}
                {/*    titleStyle={[{ color: 'blue' }]}*/}
                {/*    onPress={facebookLogin}*/}
                {/*/>*/}
                {/*<ButtonEmpty*/}
                {/*    title={i18n.t('loginScreen.loginApple')}*/}
                {/*    style={[{ borderColor: 'black' }]}*/}
                {/*    titleStyle={[{ color: 'black' }]}*/}
                {/*    onPress={appleLogin}*/}
                {/*/>*/}
            </View>
        </View>
    );
};

export default LoginForm;
