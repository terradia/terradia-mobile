import React, { FunctionComponent, ReactElement } from "react";
import HeaderCart from "@components/cart/modal/Header";
import ProductList from "@components/cart/content/ProductList";
import { ThemedSafeAreaView } from "@components/theme/Theme";

const Cart: FunctionComponent = () => {
    return (
        <ThemedSafeAreaView style={{ flex: 1 }}>
            <HeaderCart />
            <ProductList />
        </ThemedSafeAreaView>
    );
};

// @ts-ignore
Cart.navigationOptions = {
    headerMode: "none",
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default Cart;
