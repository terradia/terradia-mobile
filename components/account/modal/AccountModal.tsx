import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { colors, Header } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import i18n from "@i18n/i18n";
import updateUser from "../../../graphql/user/updateUser.graphql";
import { useMutation } from "@apollo/react-hooks";
import PhoneInput from "react-native-phone-input";
import {
    Theme,
    ThemedContainer,
    ThemedIcon,
    ThemedText,
    withTheme
} from "@components/theme/Theme";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";

declare interface AccountModalProps {
    currentEditing: string;
    setCurrentEditing: (string) => void;
    initialValue: string;
    theme: Theme;
}

const styles = StyleSheet.create({
    labelInput: {
        fontFamily: "MontserratSemiBold"
    },
    contentContainer: {
        marginTop: calcWidth(4),
        marginLeft: calcWidth(4),
        marginRight: calcWidth(4)
    },
    container: {
        flex: 1
    },
    phoneInputUnderLine: {
        height: 1,
        backgroundColor: "rgb(136, 145, 155)",
        marginTop: 10
    },
    error: {
        margin: 5,
        fontSize: 12,
        color: colors.error
    },
    buttonUpdateContainer: {
        marginTop: calcWidth(4),
        justifyContent: "center",
        alignItems: "center"
    }
});

const AccountModal: FunctionComponent<AccountModalProps> = ({
    currentEditing,
    setCurrentEditing,
    initialValue,
    theme
}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [UpdateUser, { loading }] = useMutation(updateUser, {
        onCompleted: () => {
            setCurrentEditing(null);
            setErrorMessage("");
        },
        onError: () => {
            setErrorMessage(i18n.t("accountScreen.invalidInput"));
        }
    });
    const [value, setValue] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    const phoneRef = useRef(null);

    const _update = (): void => {
        if (currentEditing === "phoneNumber") {
            const phone = phoneRef.current.getValue();
            if (!phoneRef.current.isValidNumber()) {
                setErrorMessage(i18n.t("accountScreen.invalidPhoneNumber"));
                return;
            }
            UpdateUser({
                variables: {
                    phone
                }
            });
        } else {
            if (currentEditing === "password") {
                if (value !== checkPassword) {
                    setErrorMessage(
                        i18n.t("accountScreen.passwordDoesntMatch")
                    );
                    return;
                }
            }
            if (value.length === 0) {
                setErrorMessage(i18n.t("accountScreen.fillInput"));
                return;
            }
            UpdateUser({
                variables: {
                    [currentEditing]: value
                }
            });
        }
    };

    if (currentEditing === null) return null;

    return (
        <Modal isVisible={!!currentEditing} style={{ margin: 0 }}>
            <ThemedContainer style={styles.container}>
                <Header
                    placement="left"
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => {
                                setErrorMessage("");
                                setCurrentEditing(null);
                            }}
                        >
                            <ThemedIcon
                                icon={<Feather name={"x"} />}
                                size={26}
                            />
                        </TouchableOpacity>
                    }
                    backgroundColor={"transparent"}
                />
                <View style={styles.contentContainer}>
                    {currentEditing === "phoneNumber" ? (
                        <View style={{}}>
                            <ThemedText style={styles.labelInput}>
                                {i18n.t("accountScreen.phoneNumber")}
                            </ThemedText>
                            <PhoneInput
                                ref={phoneRef}
                                initialCountry={"fr"}
                                autoFormat={true}
                                value={initialValue}
                            />
                            <View style={styles.phoneInputUnderLine} />
                            <ThemedText style={styles.error}>
                                {errorMessage}
                            </ThemedText>
                        </View>
                    ) : (
                        <>
                            <Input
                                style={{
                                    color: theme.palette.fontColor
                                }}
                                value={value}
                                label={i18n.t(
                                    "accountScreen." + currentEditing
                                )}
                                labelStyle={styles.labelInput}
                                onChangeText={value => setValue(value)}
                                errorMessage={errorMessage}
                                autoCorrect={false}
                                secureTextEntry={currentEditing === "password"}
                            />
                            {currentEditing === "password" && (
                                <Input
                                    containerStyle={{
                                        marginTop: 20
                                    }}
                                    style={{
                                        color: theme.palette.fontColor
                                    }}
                                    value={checkPassword}
                                    label={i18n.t(
                                        "accountScreen.confirmNewPassword"
                                    )}
                                    labelStyle={styles.labelInput}
                                    onChangeText={value =>
                                        setCheckPassword(value)
                                    }
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                />
                            )}
                        </>
                    )}
                    <View style={styles.buttonUpdateContainer}>
                        <ButtonWithIcon
                            title={
                                currentEditing !== null
                                    ? i18n.t(
                                          "accountScreen.update" +
                                              currentEditing
                                                  .charAt(0)
                                                  .toUpperCase() +
                                              currentEditing.slice(1)
                                      )
                                    : ""
                            }
                            textSize={20}
                            size={50}
                            type={"full"}
                            width={calcWidth(92)}
                            loading={loading}
                            onPress={(): void => {
                                _update();
                            }}
                        />
                    </View>
                </View>
            </ThemedContainer>
        </Modal>
    );
};

export default withTheme(AccountModal);
