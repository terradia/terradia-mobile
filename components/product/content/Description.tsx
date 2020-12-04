import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProductData } from "@interfaces/Companies";
import { ThemedText } from "@components/theme/Theme";

declare interface DescriptionProps {
    product: ProductData;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 14,
        marginBottom: 5
    },
    text: {
        fontFamily: "MontserratMedium",
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 10
    }
});
const Description: FunctionComponent<DescriptionProps> = ({ product }) => {
    return (
        <View style={styles.container}>
            <ThemedText style={styles.title}>Description du produit</ThemedText>
            <ThemedText style={styles.text}>{product.description}</ThemedText>
            <ThemedText style={styles.title}>Conseil du brasseur</ThemedText>
            <ThemedText style={styles.text}>
                Bière « apéritive » et festive ou à déguster tout au long d’un
                repas en accompagnement de plats traditionnels alsaciens.
            </ThemedText>
        </View>
    );
};

export default Description;
