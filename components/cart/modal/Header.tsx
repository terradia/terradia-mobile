import React, { FunctionComponent } from "react";
import styles from "./styles/Header.style";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { useNavigation } from "@react-navigation/native";
import { ThemedIcon, ThemedText } from "@components/theme/Theme";

const HeaderCart: FunctionComponent = () => {
    const { goBack } = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={(): void => goBack()}
                style={{
                    width: "20%"
                }}
            >
                <ThemedIcon icon={<Feather name="x" />} size={26} />
            </TouchableOpacity>
            <ThemedText style={styles.headerTitle}>
                {i18n.t("cart.viewCart")}
            </ThemedText>
            <View
                style={{
                    width: "20%"
                }}
            />
        </View>
    );
};

export default HeaderCart;
