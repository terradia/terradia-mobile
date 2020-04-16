import React, {
    FunctionComponent,
    ReactElement,
    useRef,
    useState
} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles/ProductList.style';
import { useMutation, useQuery } from '@apollo/react-hooks';
import getCart from '../../../graphql/cart/getCart.graphql';
import ProductListItem from '@components/cart/content/ProductListItem';
import Swipeable from 'react-native-swipeable';
import Spinner from 'react-native-loading-spinner-overlay';
import AddProductToCart from '../../../graphql/cart/addProductToCart.graphql';
import RemoveProductFromCart from '../../../graphql/cart/removeProductFromCart.graphql';

const ProductList: FunctionComponent = () => {
    const [dataLoading, setLoading] = useState(false);
    const ref = useRef(null);
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
            <Swipeable
                ref={ref}
                rightButtons={[
                    <TouchableOpacity
                        onPress={() => {
                            console.log(ref.current.recenter());
                            // ref.current._panResponder();
                            // setLoading(true);
                            // removeProductFromCart({
                            //     variables: {
                            //         cartProductId: item.id,
                            //         quantity: item.quantity
                            //     }
                            // });
                        }}
                        style={{
                            flex: 1,
                            backgroundColor: 'red',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontFamily: 'MontserratMedium',
                                marginLeft: 10
                            }}
                        >
                            Delete
                        </Text>
                    </TouchableOpacity>
                ]}
            >
                <ProductListItem
                    item={item}
                    addProductToCart={_addProduct}
                    removeProductFromCart={_removeProduct}
                />
            </Swipeable>
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
            <FlatList
                data={data.getCart.products}
                extraData={[dataLoading]}
                renderItem={_renderItem}
                keyExtractor={(item, index): string => `message ${index}`}
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
