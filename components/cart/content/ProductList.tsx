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

const ProductList: FunctionComponent = () => {
    const [dataLoading, setLoading] = useState(false);
    const { data, refetch } = useQuery(getCart, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            setLoading(false);
        }
    });
    const [addProductToCart] = useMutation(AddProductToCart, {
        onError: () => {},
        onCompleted: () => {
            refetch();
        }
    });
    const [removeProductFromCart] = useMutation(RemoveProductFromCart, {
        onError: () => {},
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

    const _renderItem = ({ item, index }): ReactElement => {
        return (
            <ProductListItem
                item={item}
                addProductToCart={_addProduct}
                removeProductFromCart={_removeProduct}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Spinner
                visible={dataLoading}
                textContent={'Loading...'}
                textStyle={{}}
            />
            <Text style={styles.title}>Votre commande</Text>
            <SwipeListView
                useFlatList={true}
                data={data.getCart.products}
                renderItem={_renderItem}
                renderHiddenItem={(rowData, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity
                            onPress={() => rowMap[rowData.item.key].closeRow()}
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
                onRowOpen={(rowKey, rowMap) => {
                    setTimeout(() => {
                        rowMap[rowKey].closeRow();
                    }, 2000);
                }}
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
