import React, { FunctionComponent, useState } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles from '@components/cart/content/styles/ProductList.style';
import QuantityModal from '@components/cart/quantity/QuantityModal';
declare interface ProductListItemProps {
    item: any;
    addProductToCart: any;
    removeProductFromCart: any;
}

const ProductListItem: FunctionComponent<ProductListItemProps> = ({
    item,
    addProductToCart,
    removeProductFromCart
}) => {
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
                onPress={() => setModalOpen(true)}
                style={styles.rowFront}
            >
                <View style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20,
                            paddingTop: 10
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.itemGreen}>
                                {item.quantity}
                            </Text>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontFamily: 'MontserratSemiBold'
                                }}
                            >
                                {item.product.name}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.itemGreen}>
                                {(item.product.price * item.quantity).toFixed(
                                    2
                                ) + ' €'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bottomItemDivider} />
                </View>
            </TouchableHighlight>
        </>
    );
};

export default ProductListItem;
