import React, { FunctionComponent } from "react";
import styles from "./styles/Header.style";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { useNavigation } from "@react-navigation/native";
import { ThemedIcon, ThemedText } from "@components/theme/Theme";

interface Props {
    type?: string;
}

const HeaderCart: FunctionComponent<Props> = ({ type = "cart", ...props }) => {
    const { goBack } = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={(): void => goBack()}
                style={{
                    width: "20%"
                }}
            >
                <ThemedIcon
                    icon={
                        <Feather name={type === "card" ? "x" : "arrow-left"} />
                    }
                    size={26}
                />
            </TouchableOpacity>
            <ThemedText style={styles.headerTitle}>
                {type === "card"
                    ? i18n.t("cart.viewCart")
                    : i18n.t("cart.paymentMethod")}
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
