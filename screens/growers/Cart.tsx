import React, { FunctionComponent, ReactElement } from 'react';
import { SafeAreaView } from 'react-native';
import HeaderCart from '@components/cart/modal/Header';
import ProductListItem from '@components/cart/content/ProductList';

const Cart: FunctionComponent = () => {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: 'rgb(242, 242, 242)' }}
        >
            <HeaderCart />
            <ProductListItem />
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
