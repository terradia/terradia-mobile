import React, { FunctionComponent, ReactElement } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import HeaderCart from '@components/cart/modal/Header';
import CartModalContent from '@components/cart/content';

const Cart: FunctionComponent = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderCart />
            <ScrollView style={{ width: '100%', flex: 1 }}>
                <CartModalContent />
            </ScrollView>
        </SafeAreaView>
    );
};

// @ts-ignore
Cart.navigationOptions = {
    headerMode: 'none',
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default Cart;
