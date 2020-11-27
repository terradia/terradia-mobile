import React, { FunctionComponent, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "@components/cart/content/styles/ProductList.style";
import { ThemedBox, ThemedText, withTheme } from "@components/theme/Theme";
import style from "@components/cards/styles/GrowerCard.style";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
declare interface ProductListItemProps {
    item: any;
    addProductToCart: any;
    removeProductFromCart: any;
}

const ProductListItem: FunctionComponent<ProductListItemProps> = withTheme(
    ({ item, addProductToCart, removeProductFromCart, refetch, theme }) => {
        const [modalOpen, setModalOpen] = useState(false);
        return (
            <>
                {/*<QuantityModal*/}
                {/*    isModalOpen={modalOpen}*/}
                {/*    setModalOpen={setModalOpen}*/}
                {/*    item={item}*/}
                {/*    addProductToCart={addProductToCart}*/}
                {/*    removeProductFromCart={removeProductFromCart}*/}
                {/*/>*/}
                <ThemedBox style={[styles.card, styles.shadow1]}>
                    {item.product.cover && (
                        <View style={styles.productImageContainer}>
                            <Image
                                source={{
                                    uri:
                                        "https://media.terradia.eu/" +
                                        item.product.cover.companyImage.filename
                                }}
                                style={style.backgroundImage}
                            />
                        </View>
                    )}
                    <View style={styles.middleContainer}>
                        <ThemedText style={styles.productName}>
                            {item.product.name}
                        </ThemedText>
                        <ThemedText style={styles.productDescription}>
                            {item.product.description}
                        </ThemedText>
                        <View style={styles.productPriceContainer}>
                            <ThemedText
                                style={[
                                    styles.productPrice,
                                    { color: theme.palette.primary }
                                ]}
                            >
                                {`${item.product.price.toFixed(2)}€`}
                            </ThemedText>
                            <ThemedText
                                style={[
                                    styles.unit,
                                    { color: theme.palette.primary }
                                ]}
                            >
                                {` / ${item.product.quantityForUnit *
                                    item.quantity}${
                                    item.product.unit.notation
                                }`}
                            </ThemedText>
                        </View>
                    </View>
                    <View style={styles.endContainer}>
                        <View style={styles.endItem}>
                            <ButtonWithIcon
                                onPress={() => {
                                    removeProductFromCart({
                                        variables: {
                                            productId: item.product.id,
                                            quantity: 1
                                        }
                                    });
                                }}
                                color={theme.palette.fontColor}
                                textSize={20}
                                size={calcWidth(5)}
                                title={"-"}
                            />
                        </View>
                        <View style={styles.endItem}>
                            <ThemedText style={styles.endItemText}>
                                {item.quantity}
                            </ThemedText>
                        </View>
                        <View style={styles.endItem}>
                            <ButtonWithIcon
                                onPress={() => {
                                    addProductToCart({
                                        variables: {
                                            productId: item.product.id,
                                            quantity: 1
                                        }
                                    });
                                }}
                                color={theme.palette.fontColor}
                                textSize={20}
                                size={calcWidth(5)}
                                title={"+"}
                            />
                        </View>
                    </View>
                </ThemedBox>
            </>
        );
    }
);

export default ProductListItem;
