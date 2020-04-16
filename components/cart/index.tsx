import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import Footer from './screens/Footer';
import { useQuery } from '@apollo/react-hooks';
import getCart from '../../graphql/cart/getCart.graphql';

const Cart: FunctionComponent<any> = () => {
    const { data } = useQuery(getCart);

    if (!data || !data.getCart || data.getCart.products.length === 0)
        return null;
    return (
        <View>
            <Footer />
        </View>
    );
};

export default Cart;
