import React, { FunctionComponent, useRef, useState } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "../../screens/authentication/styles/AccountRecovery.style";
import i18n from "@i18n/i18n";
import CodeInput from "react-native-confirmation-code-input";
import { useMutation } from "@apollo/react-hooks";
import SignInWithgeneratedCode from "../../graphql/user/signInWithCode.graphql";
// import * as Notifications from 'expo-notifications';
import Spinner from "react-native-loading-spinner-overlay";
import Preload from "../../screens/authentication/Preload";
import { Theme, ThemedText, withTheme } from "@components/theme/Theme";

declare interface CodeStateProps {
    email: string;
    theme: Theme;
}

const CodeState: FunctionComponent<CodeStateProps> = ({ email, theme }) => {
    const [error, setError] = useState("");
    const preloadRef = useRef(null);
    const onCompletedHandler = async (data): Promise<void> => {
        await AsyncStorage.setItem(
            "token",
            data.signInWithgeneratedCode.token
        ).then();
        await AsyncStorage.setItem(
            "userId",
            data.signInWithgeneratedCode.userId
        ).then();
        preloadRef.current.preload();
    };
    const [SignInWithCode, { loading }] = useMutation(SignInWithgeneratedCode, {
        onCompleted: async data => {
            onCompletedHandler(data);
        },
        onError: () => {
            setError(i18n.t("AccountRecoveryScreen.InvalidCodeOrEmail"));
        }
    });

    // const _getExponentPushToken = async () => {
    //     await Notifications.requestPermissionsAsync();
    //     try {
    //         const expoPushToken = await Notifications.getExpoPushTokenAsync({
    //             experienceId
    //         });
    //         return expoPushToken.data;
    //     } catch (e) {
    //         return null;
    //     }
    // };
    const _fullFillCode = async (code): Promise<void> => {
        // const exponentToken = await _getExponentPushToken();
        SignInWithCode({
            variables: {
                email,
                code,
                exponentPushToken: "exponentToken"
            }
        });
    };

    return (
        <View>
            <Spinner visible={loading} textContent={i18n.t("loading")} />
            <Text
                style={{
                    fontFamily: "Montserrat",
                    color: theme.palette.fontColor,
                    alignSelf: "center",
                    marginTop: 20,
                    fontSize: 20
                }}
            >
                {email}
            </Text>
            <TouchableOpacity onPress={() => {}} style={styles.forgotContainer}>
                <ThemedText style={styles.forgotText}>
                    {i18n.t("AccountRecoveryScreen.resentCode")}
                </ThemedText>
            </TouchableOpacity>
            <CodeInput
                codeLength={6}
                className={"border-b"}
                space={7}
                autoFocus={true}
                size={40}
                activeColor={theme.palette.fontColor}
                inactiveColor={theme.palette.fontColor}
                keyboardType="numeric"
                onFulfill={_fullFillCode}
                containerStyle={{
                    marginTop: 40,
                    height: 50,
                    flex: 0
                }}
                codeInputStyle={{
                    color: theme.palette.fontColor
                }}
            />
            <Text style={[styles.errorText, { marginBottom: 40 }]}>
                {error}
            </Text>
            <Preload ref={preloadRef} />
        </View>
    );
};

export default withTheme(CodeState);
