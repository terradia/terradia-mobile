import React, { FunctionComponent } from "react";
import styles from "./styles/Header.style";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { useNavigation } from "@react-navigation/native";

const HeaderCart: FunctionComponent = () => {
    const { goBack } = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={{ padding: 3 }}
                onPress={(): void => goBack()}
            >
                <Feather name="x" size={26} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{i18n.t("cart.viewCart")}</Text>
            <View />
        </View>
    );
};

export default HeaderCart;
