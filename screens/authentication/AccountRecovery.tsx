import React, { FunctionComponent, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/AccountRecovery.style";
import EmailState from "@components/accountRecovery/EmailState";
import CodeState from "@components/accountRecovery/CodeState";
import i18n from "@i18n/i18n";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ButtonTerradia from "@components/buttons/ButtonTerradia";

const AccountRecovery: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [email, setEmail] = useState("");
    const [state, setState] = useState(true);
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <TouchableOpacity
                    onPress={(): void => navigate("Login")}
                    style={{}}
                >
                    <AntDesign name="arrowleft" size={32} color={"#575757"} />
                </TouchableOpacity>
                <Text style={styles.titleText}>
                    {i18n.t("AccountRecoveryScreen.accountRecovery")}
                </Text>
            </View>
            <View style={styles.container}>
                {state ? (
                    <EmailState
                        email={email}
                        setEmail={setEmail}
                        setState={setState}
                    />
                ) : (
                    <CodeState email={email} />
                )}
            </View>
            {!state && (
                <View style={styles.buttonContainer}>
                    <ButtonTerradia
                        title={i18n.t("AccountRecoveryScreen.updateEmail")}
                        onPress={async (): Promise<void> => {
                            setState(true);
                        }}
                        style={[{ borderColor: "#FFFFFF" }]}
                        titleStyle={[{ color: "#FFFFFF" }]}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

export default AccountRecovery;
