import React, { FunctionComponent, ReactElement, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles/ProductList.style";
import { useMutation, useQuery } from "@apollo/react-hooks";
import getCart from "../../../graphql/cart/getCart.graphql";
import ProductListItem from "@components/cart/content/ProductListItem";
import Spinner from "react-native-loading-spinner-overlay";
import AddProductToCart from "../../../graphql/cart/addProductToCart.graphql";
import RemoveProductFromCart from "../../../graphql/cart/removeProductFromCart.graphql";
import { SwipeListView } from "react-native-swipe-list-view";
import i18n from "@i18n/i18n";
import { useNavigation } from "@react-navigation/native";
import { ButtonWithIcon } from "@components/buttons/ButtonWithIcon";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";
import { Feather } from "@expo/vector-icons";
import { OrderFooter } from "@components/orders/OrderFooter";

const ProductList: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const [dataLoading, setLoading] = useState(false);
    const { data, refetch } = useQuery(getCart, {
        notifyOnNetworkStatusChange: true,
        onError: err => {
            console.log(err);
        },
        onCompleted: () => {
            setLoading(false);
        }
    });
    const [addProductToCart] = useMutation(AddProductToCart, {
        onError: err => {
            setLoading(false);
            console.log(err);
        },
        onCompleted: () => {
            refetch();
            setLoading(false);
        }
    });
    const [removeProductFromCart] = useMutation(RemoveProductFromCart, {
        onError: err => {
            setLoading(false);
            console.log(err);
        },
        onCompleted: () => {
            refetch();
            setLoading(false);
        }
    });
    const _addProduct = params => {
        addProductToCart(params);
        setLoading(true);
    };
    const _removeProduct = params => {
        removeProductFromCart(params);
        setLoading(true);
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
                    <Feather name={"trash"} size={30} color={"white"} />
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
                    alignSelf: "center",
                    fontFamily: "MontserratSemiBold",
                    color: "#575757"
                }}
            >
                {i18n.t("cart.cartEmpty")}
            </Text>
        );
    }

    const [refreshing, setRefreshing] = React.useState(false);

    return (
        <View style={styles.container}>
            <Spinner
                visible={dataLoading}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />
            <SwipeListView
                disableRightSwipe
                useFlatList={true}
                data={data.getCart.products}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={calcWidth(20)}
                keyExtractor={(item, index): string => index.toString()}
                rightOpenValue={-calcWidth(24)}
                closeOnRowBeginSwipe
                closeOnScroll
                closeOnRowPress
                previewRowKey={"0"}
                previewDuration={300}
                previewOpenValue={-calcWidth(24)}
                stopRightSwipe={-calcWidth(24)}
                onRefresh={() => {
                    setRefreshing(true);
                    refetch().then(() => {
                        setRefreshing(false);
                    });
                }}
                refreshing={refreshing}
                style={{
                    paddingTop: calcWidth(2)
                }}
            />
            <View
                style={{
                    paddingHorizontal: calcWidth(4)
                }}
            >
                <OrderFooter cart={data.getCart} />
                <ButtonWithIcon
                    onPress={(): void =>
                        navigate("PaymentPicker", { cart: data.getCart })
                    }
                    size={50}
                    title={i18n.t("cart.paymentMethod")}
                    textSize={20}
                    width={calcWidth(92)}
                    type={"full"}
                />
            </View>
        </View>
    );
};

export default ProductList;
