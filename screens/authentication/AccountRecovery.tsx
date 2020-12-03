import React, { FunctionComponent, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/AccountRecovery.style";
import EmailState from "@components/accountRecovery/EmailState";
import CodeState from "@components/accountRecovery/CodeState";
import i18n from "@i18n/i18n";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ButtonTerradia from "@components/buttons/ButtonTerradia";
import MainHeader from "@components/theme/MainHeader";
import { ThemedBox, ThemedContainer, ThemedSafeAreaView } from '@components/theme/Theme';
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";

const AccountRecovery: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [email, setEmail] = useState("");
    const [state, setState] = useState(true);
    return (
        <ThemedContainer style={{ flex: 1 }}>
            <MainHeader
                title={i18n.t("AccountRecoveryScreen.accountRecovery")}
                backButton
            />
            <ThemedBox style={styles.container}>
                {state ? (
                    <EmailState
                        email={email}
                        setEmail={setEmail}
                        setState={setState}
                    />
                ) : (
                    <CodeState email={email} />
                )}
            </ThemedBox>
            {!state && (
                <View style={styles.buttonContainer}>
                    <ButtonWithIcon
                        title={i18n.t("AccountRecoveryScreen.updateEmail")}
                        onPress={async (): Promise<void> => {
                            setState(true);
                        }}
                        size={50}
                        textSize={20}
                    />
                </View>
            )}
        </ThemedContainer>
    );
};

export default AccountRecovery;
