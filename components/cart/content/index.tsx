import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import AddressInformation from '@components/cart/content/AddressInformations';
import DeliveryDate from '@components/cart/content/DeliveryDate';
import ProductListItem from '@components/cart/content/ProductList';

const CartModalContent: FunctionComponent = () => {
    return (
        <View>
            <AddressInformation />
            <DeliveryDate />
            <ProductListItem />
        </View>
    );
};

export default CartModalContent;
