import React, { FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../screens/authentication/styles/AccountRecovery.style";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { useMutation } from "@apollo/react-hooks";
import GenerateCodePasswordForgot from "../../graphql/user/generateCodePasswordForgot.graphql";
import ButtonTerradia from "@components/buttons/ButtonTerradia";
import { Kohana } from "react-native-textinput-effects";
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import { Theme, withTheme } from "@components/theme/Theme";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";

declare interface EmailStateProps {
    email: string;
    setEmail: (string) => void;
    setState: (boolean) => void;
    theme: Theme;
}

const EmailState: FunctionComponent<EmailStateProps> = ({
    email,
    setEmail,
    setState,
    theme
}) => {
    const [error, setError] = useState("");
    const [askNewCode, { loading }] = useMutation(GenerateCodePasswordForgot, {
        onCompleted: data => {
            if (data.generateCodePasswordForgot) {
                setState(false);
            } else {
                setError(i18n.t("AccountRecoveryScreen.invalidEmail"));
            }
        },
        onError: () => {
            setError(i18n.t("AccountRecoveryScreen.invalidEmail"));
        }
    });
    return (
        <>
            <View style={styles.inputTextContainer}>
                <Kohana
                    style={styles.inputText}
                    label={i18n.t("registerScreen.addrEmail")}
                    keyboardType={"email-address"}
                    onChangeText={(text: string): void => setEmail(text)}
                    iconClass={MaterialIcons}
                    iconName={"email"}
                    iconColor={"#8FDD3D"}
                    inputPadding={0}
                    labelStyle={styles.inputLabelStyle}
                    inputStyle={{
                        color: theme.palette.fontColor,
                        fontFamily: "Montserrat"
                    }}
                    labelContainerStyle={{ padding: calcWidth(2) }}
                    iconContainerStyle={{ padding: 10 }}
                />
            </View>
            {!!error && <Text style={styles.errorText}>{error}</Text>}
            <ButtonWithIcon
                title={i18n.t("AccountRecoveryScreen.alreadyHaveTheCode")}
                size={40}
                textSize={18}
                onPress={() => {
                    if (email.trim().length === 0) {
                        setError(
                            i18n.t("AccountRecoveryScreen.fillInputEmail")
                        );
                        return;
                    }
                    setState(false);
                }}
                style={styles.forgotContainer}
            />
            <ButtonWithIcon
                title={i18n.t("AccountRecoveryScreen.sendCode")}
                onPress={async (): Promise<void> => {
                    if (email.length === 0) {
                        setError(i18n.t("AccountRecoveryScreen.invalidEmail"));
                        return;
                    }
                    askNewCode({ variables: { email } });
                }}
                loading={loading}
                size={50}
                textSize={20}
                type={"full"}
                width={calcWidth(100 - 16)}
            />
        </>
    );
};

export default withTheme(EmailState);
