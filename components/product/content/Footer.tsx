import React, { FunctionComponent, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import i18n from "@i18n/i18n";
import { ProductData } from "@interfaces/Companies";
import { useMutation, useQuery } from "@apollo/react-hooks";
import AddProductToCart from "../../../graphql/cart/addProductToCart.graphql";
import { useNavigation } from "@react-navigation/native";
import getCart from "../../../graphql/cart/getCart.graphql";
import Spinner from "react-native-loading-spinner-overlay";
import { CartData } from "@interfaces/User";
import TerradiaSimpleDialog from "@components/modals/dialogs/TerradiaSimpleDialog";
import styles from "./styles/Footer.style";

declare interface FooterProps {
    product: ProductData;
}

const Footer: FunctionComponent<FooterProps> = ({ product }) => {
    const [count, setCount] = useState(1);
    const [isDialogVisible, setDialogVisible] = useState(false);

    const { goBack } = useNavigation();
    const { data: cart } = useQuery<{ getCart: CartData }>(getCart);
    const [addProductToCart, { loading }] = useMutation(AddProductToCart, {
        awaitRefetchQueries: true,
        refetchQueries: [{ query: getCart }],
        onCompleted: () => {
            goBack();
        }
    });
    const _addCount = (): void => {
        setCount(count + 1);
    };

    const _removeCount = (): void => {
        if (count === 1) return;
        setCount(count - 1);
    };

    const _updateCart = (): void => {
        addProductToCart({
            variables: { productId: product.id, quantity: count }
        });
    };

    const onDialogYesPressed = (): void => {
        _updateCart();
    };

    const onDialogNoPressed = (): void => {
        return;
    };

    const _generateDialogMessage = (): string => {
        if (!cart || !cart.getCart) return null;
        const message =
            i18n.t("productScreen.youHaveACart1") +
            " ( " +
            cart.getCart.company.name +
            " )" +
            i18n.t("productScreen.youHaveACart2") +
            " ( " +
            product.company.name +
            " ) " +
            " ?";
        return message;
    };

    return (
        <View style={styles.topContainer}>
            <TerradiaSimpleDialog
                title={i18n.t("productScreen.newCartTitle")}
                message={_generateDialogMessage()}
                positiveButtonTitle={i18n.t("productScreen.newCartTitle")}
                negativeButtonTitle={i18n.t("productScreen.no")}
                isDialogVisible={isDialogVisible}
                setDialogVisible={setDialogVisible}
                onDialogNoPressed={onDialogNoPressed}
                onDialogYesPressed={onDialogYesPressed}
            />
            <Spinner
                visible={loading}
                textContent={i18n.t("loading")}
                textStyle={{ fontFamily: "MontserratSemiBold" }}
            />
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={(): void => _removeCount()}>
                    <AntDesign name="minuscircleo" size={40} color="#5CC04A" />
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity onPress={(): void => _addCount()}>
                    <AntDesign name="pluscircleo" size={40} color="#5CC04A" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={(): void => {
                    if (!cart || !cart.getCart) {
                        _updateCart();
                        return;
                    }
                    if (
                        product.company.id !== cart.getCart.company.id &&
                        cart.getCart.products.length > 0
                    ) {
                        setDialogVisible(true);
                        return;
                    } else {
                        _updateCart();
                    }
                }}
                style={styles.bottomContainer}
            >
                <View style={{}}>
                    <Text style={styles.texts}>
                        {i18n.t("productScreen.addToCart")}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={[styles.texts, styles.rightText]}>
                        {(product.price * count).toFixed(2)}€
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
