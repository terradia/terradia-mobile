import React, { FunctionComponent, useState } from "react";
import {
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import styles from "@components/cart/content/styles/ProductList.style";
import QuantityModal from "@components/cart/quantity/QuantityModal";
import { ThemedBox, ThemedText, withTheme } from "@components/theme/Theme";
import style from "@components/cards/styles/GrowerCard.style";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";
declare interface ProductListItemProps {
    item: any;
    addProductToCart: any;
    removeProductFromCart: any;
}

const ProductListItem: FunctionComponent<ProductListItemProps> = withTheme(
    ({ item, addProductToCart, removeProductFromCart, theme }) => {
        const [modalOpen, setModalOpen] = useState(false);
        return (
            <>
                <QuantityModal
                    isModalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    item={item}
                    addProductToCart={addProductToCart}
                    removeProductFromCart={removeProductFromCart}
                />
                <TouchableHighlight
                    onPress={(): void => setModalOpen(true)}
                    style={styles.rowFront}
                    activeOpacity={0.9}
                >
                    <ThemedBox style={styles.card}>
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
                            <ThemedText
                                style={[
                                    styles.productPrice,
                                    { color: theme.palette.primary }
                                ]}
                            >
                                {item.product.price.toFixed(2) + "€"}
                            </ThemedText>
                        </View>
                        <View style={styles.endContainer}>
                            <View style={styles.endItem}>
                                <ThemedText style={styles.endItemText}>
                                    -
                                </ThemedText>
                            </View>
                            <View style={styles.endItem}>
                                <ThemedText style={styles.endItemText}>
                                    {item.quantity}
                                </ThemedText>
                            </View>
                            <View style={styles.endItem}>
                                <ThemedText style={styles.endItemText}>
                                    +
                                </ThemedText>
                            </View>
                        </View>
                    </ThemedBox>
                </TouchableHighlight>
            </>
        );
    }
);

export default ProductListItem;
