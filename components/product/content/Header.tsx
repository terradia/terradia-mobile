import React, { FunctionComponent } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ProductData } from "@interfaces/Companies";
import { elevationShadowStyle } from "@constants/Layout";
import { ThemedBox, ThemedText } from "@components/theme/Theme";

declare interface HeaderProps {
    product: ProductData;
}

const styles = StyleSheet.create({
    tag: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: "#FFE732",
        width: 100,
        marginLeft: 20,
        marginTop: 5
    },
    container: {
        height: 110,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row"
    },
    leftContainer: {
        flex: 8,
        marginRight: 10
    },
    productName: {
        fontFamily: "MontserratBold",
        fontSize: 17
    },
    tagText: {
        fontFamily: "MontserratSemiBold",
        color: "white",
        fontWeight: "500"
    },
    rightContainer: {
        flex: 4,
        alignItems: "center"
    },
    priceText: {
        color: "#5CC04A",
        fontFamily: "MontserratBold",
        fontSize: 30,
        alignSelf: "flex-end"
    },
    unitPrice: {
        color: "#B4B4B4",
        fontFamily: "Montserrat",
        fontSize: 15,
        alignSelf: "flex-end"
    },
    image: {
        borderRadius: 10
    }
});

const Header: FunctionComponent<HeaderProps> = ({ product }) => {
    return (
        <ThemedBox style={styles.container}>
            <View style={styles.leftContainer}>
                <View>
                    <ThemedText style={styles.productName}>
                        {product.name}
                    </ThemedText>
                </View>
                <View style={styles.tag}>
                    <ThemedText style={styles.tagText}>NOUVEAUTE</ThemedText>
                </View>
                <ThemedText style={styles.priceText}>
                    {product.price.toFixed(2) + " €"}
                </ThemedText>
                <ThemedText style={styles.unitPrice}>Prix unitaire</ThemedText>
            </View>
            <View style={styles.rightContainer}>
                <View style={elevationShadowStyle(5, "black")}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: product.cover
                                ? "https://media.terradia.eu/" +
                                  product.cover.companyImage.filename
                                : "https://media.terradia.eu/20b6aef5bacab850344aa3036f8253e6.jpg",
                            height: 100,
                            width: 100
                        }}
                    />
                </View>
            </View>
        </ThemedBox>
    );
};

export default Header;
