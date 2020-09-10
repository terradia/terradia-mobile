import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles/GrowersProductsListRender.style";
import { ProductData } from "@interfaces/Companies";

export const renderHeaders: FunctionComponent<string> = (title: string) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
                {title.toUpperCase()}
            </Text>
        </View>
    );
};

declare interface RenderListProductsProps {
    product: ProductData;
}

export const renderItems: FunctionComponent<RenderListProductsProps> = ({
    product
}) => {
    console.log(product);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.textsContainer}>
                    <View style={styles.spacer}>
                        <Text style={[styles.textsColor, styles.productTitle]}>
                            {product.name}
                        </Text>
                    </View>
                    <View style={[styles.spacer, { marginRight: 10 }]}>
                        <Text
                            style={[
                                styles.textsColor,
                                styles.productDescription
                            ]}
                        >
                            {product.description}
                        </Text>
                    </View>
                    <View style={[styles.priceContainer, styles.spacer]}>
                        <View />
                        <View>
                            <Text style={[styles.priceTag, styles.textsColor]}>
                                {product.price.toFixed(2)}€
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.imageContainer}>
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
                        // source={{
                        //     uri: `http://www.aubrasseur.fr/wp-content/uploads/2014/04/20140311-911-Modifier-003.jpg`,
                        //     height: 100,
                        //     width: 100
                        // }}
                    />
                </View>
            </View>
        </View>
    );
};
