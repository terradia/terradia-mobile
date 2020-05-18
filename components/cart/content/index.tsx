import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import AddressInformation from '@components/cart/content/AddressInformations';
import DeliveryDate from '@components/cart/content/DeliveryDate';
import ProductListItem from '@components/cart/content/ProductList';
import { useQuery } from '@apollo/react-hooks';
import getCart from '../../../graphql/cart/getCart.graphql';
import { CartData } from '@interfaces/User';

const CartModalContent: FunctionComponent = () => {
    const { data } = useQuery<{ getCart: CartData }>(getCart, {
        notifyOnNetworkStatusChange: true
    });
    if (data.getCart.products.length === 0)
        return (
            <Text
                style={{
                    alignSelf: 'center',
                    fontFamily: 'MontserratSemiBold',
                    color: '#575757'
                }}
            >
                Vous n'avez pas de produits dans votre panier
            </Text>
        );
    return (
        <View style={{ flex: 1 }}>
            <ProductListItem />
        </View>
    );
};

export default CartModalContent;
