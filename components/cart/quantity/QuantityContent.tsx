import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import Header from '@components/product/content/Header';
import { useMutation } from '@apollo/react-hooks';
import AddProductToCart from '../../../graphql/cart/addProductToCart.graphql';
import RemoveProductFromCart from '../../../graphql/cart/removeProductFromCart.graphql';
import i18n from '@i18n/i18n';
import styles from './styles/QuantityContent.style';

declare interface QuantityContentProps {
    isModalOpen: boolean;
    setModalOpen: any;
    item: any;
    addProductToCart: any;
    removeProductFromCart: any;
}

const QuantityContent: FunctionComponent<QuantityContentProps> = ({
    item,
    setModalOpen,
    addProductToCart,
    removeProductFromCart
}) => {
    const [count, setCount] = useState(item.quantity);
    const _addCount = () => {
        setCount(count + 1);
    };
    useEffect(() => {
        setCount(item.quantity);
    }, [item]);
    const _removeCount = () => {
        if (count === 0) return;
        setCount(count - 1);
    };
    const _updateQuantity = () => {
        const value = count - item.quantity;
        if (value > 0) {
            addProductToCart({
                variables: { productId: item.product.id, quantity: value }
            });
        } else if (value < 0) {
            removeProductFromCart({
                variables: { cartProductId: item.id, quantity: -value }
            });
        }
        setModalOpen(false);
    };

    return (
        <>
            <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={(): boolean => setModalOpen(false)}
            >
                <Feather name="x" size={24} />
            </TouchableOpacity>
            <Header product={item.product} />
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => _removeCount()}>
                    <AntDesign name="minuscircleo" size={40} color="#5CC04A" />
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity onPress={() => _addCount()}>
                    <AntDesign name="pluscircleo" size={40} color="#5CC04A" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    _updateQuantity();
                }}
                style={styles.bottomContainer}
            >
                <View style={{}}>
                    <Text style={styles.texts}>
                        {i18n.t('cart.updateProduct')}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={[styles.texts, styles.rightText]}>
                        {(item.product.price * count).toFixed(2).replace(".", ",")} €
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default QuantityContent;
