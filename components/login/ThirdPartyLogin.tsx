import React, { FunctionComponent, useState } from "react";
import * as Facebook from "expo-facebook";
import DoesAccountExistWithEmail from "../../graphql/facebook/doesAccountExistWithEmail.graphql";
import SignUpWithFacebook from "../../graphql/facebook/signUpWithFacebook.graphql";
import SignInWithFacebook from "../../graphql/facebook/signInWithFacebook.graphql";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Spinner from "react-native-loading-spinner-overlay";
import i18n from "@i18n/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
import { FontAwesome } from "@expo/vector-icons";

declare interface ThirdPartyLoginProps {
    navigateHome?: () => void;
}

const ThirdPartyLogin: FunctionComponent<ThirdPartyLoginProps> = ({
    navigateHome
}) => {
    const [facebookToken, setFacebookToken] = useState("");

    const _getExponentPushToken = async () => {
        const { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
        );
        if (status !== "granted") {
            alert("No notification permissions!");
            return;
        }
        return await Notifications.getExpoPushTokenAsync();
    };

    const _onLoginSuccessful = async (token, userId) => {
        AsyncStorage.setItem("token", token).then();
        AsyncStorage.setItem("userId", userId).then();
        navigateHome();
    };

    const [signUpWithFacebook, { loading: signUpLoading }] = useMutation(
        SignUpWithFacebook,
        {
            onCompleted: async data => {
                _onLoginSuccessful(
                    data.signUpWithFacebook.token,
                    data.signUpWithFacebook.userId
                );
            },
            onError: error => {
                console.warn(error);
            }
        }
    );
    const [signInWithFacebook, { loading: signInLoading }] = useMutation(
        SignInWithFacebook,
        {
            onCompleted: async data => {
                _onLoginSuccessful(
                    data.signInWithFacebook.token,
                    data.signInWithFacebook.userId
                );
            },
            onError: error => {
                console.warn(error);
            }
        }
    );

    const [loadAccountAlreadyExist, { loading }] = useLazyQuery(
        DoesAccountExistWithEmail,
        {
            variables: { facebookToken: null },
            onCompleted: async data => {
                const exponentToken = await _getExponentPushToken();
                if (!data.doesFacebookAccountExistWithEmail) {
                    signUpWithFacebook({
                        variables: {
                            facebookToken,
                            exponentPushToken: exponentToken,
                            defineUserAsCostumer: true
                        }
                    });
                } else {
                    signInWithFacebook({
                        variables: {
                            facebookToken,
                            exponentPushToken: exponentToken
                        }
                    });
                }
            }
        }
    );

    async function logIn(): Promise<void> {
        try {
            await Facebook.initializeAsync("261809404828885", "Terradia");
            const resp = await Facebook.logInWithReadPermissionsAsync({
                permissions: ["public_profile", "email"]
            });
            if (resp.type === "success") {
                await _getExponentPushToken();
                setFacebookToken(resp.token);
                loadAccountAlreadyExist({
                    variables: { facebookToken: resp.token }
                });
            } else {
                console.log("User canceled");
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <>
            <Spinner
                visible={loading || signInLoading || signUpLoading}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />
            <ButtonWithIcon
                onPress={(): Promise<void> => logIn()}
                type={"full"}
                title={i18n.t("loginScreen.loginFacebook")}
                color={"rgb(24, 119, 242)"}
                width={calcWidth(92)}
                size={50}
                textSize={20}
                radius={8}
                leftIcon={<FontAwesome name={"facebook"} />}
                style={{
                    marginBottom: calcWidth(3)
                }}
            />
        </>
    );
};

export default ThirdPartyLogin;
