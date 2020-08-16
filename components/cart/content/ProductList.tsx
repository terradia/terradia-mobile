import React, { FunctionComponent, ReactElement, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/ProductList.style';
import { useMutation, useQuery } from '@apollo/react-hooks';
import getCart from '../../../graphql/cart/getCart.graphql';
import ProductListItem from '@components/cart/content/ProductListItem';
import Spinner from 'react-native-loading-spinner-overlay';
import AddProductToCart from '../../../graphql/cart/addProductToCart.graphql';
import RemoveProductFromCart from '../../../graphql/cart/removeProductFromCart.graphql';
import { SwipeListView } from 'react-native-swipe-list-view';
import AddressInformation from '@components/cart/content/AddressInformations';
import DeliveryDate from '@components/cart/content/DeliveryDate';
import i18n from '@i18n/i18n';

const ProductList: FunctionComponent = () => {
    const [dataLoading, setLoading] = useState(false);
    const { data, refetch } = useQuery(getCart, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            setLoading(false);
        }
    });
    const [addProductToCart] = useMutation(AddProductToCart, {
        onError: () => {
            setLoading(false);
        },
        onCompleted: () => {
            refetch();
        }
    });
    const [removeProductFromCart] = useMutation(RemoveProductFromCart, {
        onError: () => {
            setLoading(false);
        },
        onCompleted: () => {
            refetch();
        }
    });
    const _addProduct = params => {
        setTimeout(() => {
            addProductToCart(params);
            setLoading(true);
        }, 200);
    };
    const _removeProduct = params => {
        setTimeout(() => {
            removeProductFromCart(params);
            setLoading(true);
        }, 200);
    };

    const renderItem = data => (
        <ProductListItem
            item={data.item}
            addProductToCart={_addProduct}
            removeProductFromCart={_removeProduct}
        />
    );
    const renderHiddenItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={(): void => {
                    setLoading(true);
                    removeProductFromCart({
                        variables: {
                            cartProductId: item.id,
                            quantity: item.quantity
                        }
                    });
                }}
                style={styles.rowBack}
            >
                <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                    <Text style={styles.backTextWhite}>Delete</Text>
                </View>
            </TouchableOpacity>
        );
    };
    if (!data || !data.getCart || !data.getCart.products)
        return <Text>Loading</Text>;
    if (data.getCart.products.length === 0) {
        return (
            <Text
                style={{
                    alignSelf: 'center',
                    fontFamily: 'MontserratSemiBold',
                    color: '#575757'
                }}
            >
                {i18n.t('cart.cartEmpty')}
            </Text>
        );
    }

    return (
        <View style={styles.container}>
            <Spinner
                visible={dataLoading}
                textContent={i18n.t('loading')}
                textStyle={{ fontFamily: 'MontserratSemiBold' }}
            />
            <SwipeListView
                ListHeaderComponent={(): ReactElement => {
                    return (
                        <View>
                            <AddressInformation cart={data.getCart} />
                            <DeliveryDate />
                            <Text style={styles.title}>
                                {i18n.t('cart.yourOrder')}
                            </Text>
                        </View>
                    );
                }}
                disableRightSwipe
                useFlatList={true}
                data={data.getCart.products}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                keyExtractor={(item, index): string => index.toString()}
                rightOpenValue={-75}
                closeOnRowBeginSwipe
                closeOnScroll
                closeOnRowPress
                previewRowKey={'0'}
                previewDuration={500}
                previewOpenValue={-75}
                stopRightSwipe={-100}
            />
            <View style={styles.priceContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>
                    {data.getCart.totalPrice.toFixed(2)} $
                </Text>
            </View>
        </View>
    );
};

export default ProductList;
