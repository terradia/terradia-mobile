import React, { FunctionComponent, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import i18n from '@i18n/i18n';
import { Product } from '@interfaces/Companies';
import { useMutation } from '@apollo/react-hooks';
import AddProductToCart from '../../../graphql/cart/addProductToCart.graphql';
import { useNavigation } from 'react-navigation-hooks';
import getCart from '../../../graphql/cart/getCart.graphql';
import Spinner from 'react-native-loading-spinner-overlay';

declare interface FooterProps {
    product: Product;
}

const styles = StyleSheet.create({
    topContainer: {
        marginTop: 10
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    countText: {
        width: 100,
        textAlign: 'center',
        fontFamily: 'MontserratLight',
        color: '#5CC04A',
        fontSize: 35
    },
    bottomContainer: {
        height: 80,
        backgroundColor: '#5CC04A',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20
    },
    texts: {
        color: 'white',
        fontSize: 20
    },
    rightContainer: {
        flexDirection: 'row'
    },
    rightText: {
        marginRight: 5
    }
});

const Footer: FunctionComponent<FooterProps> = ({ product }) => {
    const [count, setCount] = useState(1);
    const [addProductToCart, {loading}] = useMutation(AddProductToCart, {
        awaitRefetchQueries: true,
        refetchQueries: [{ query: getCart }],
        onCompleted: () => {
            goBack();
        }
    });
    const { goBack } = useNavigation();
    const _addCount = () => {
        setCount(count + 1);
    };

    const _removeCount = () => {
        if (count === 1) return;
        setCount(count - 1);
    };

    return (
        <View style={styles.topContainer}>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={{}}
            />
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
                    addProductToCart({
                        variables: { productId: product.id, quantity: count }
                    });
                    goBack();
                }}
                style={styles.bottomContainer}
            >
                <View style={{}}>
                    <Text style={styles.texts}>{i18n.t('cart.viewCart')}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={[styles.texts, styles.rightText]}>
                        {(product.price * count).toFixed(2)}€
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
