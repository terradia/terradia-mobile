import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import ItemMenuCards from "./ItemMenuCards";
import Star from "../../../assets/images/star.svg";
import Cart from "../../../assets/images/cart.svg";
import Receipt from "../../../assets/images/receipt.svg";
import Wallet from "../../../assets/images/wallet.svg";
import i18n from "@i18n/i18n";

const styles = StyleSheet.create({
    menuContainers: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10
    }
});

const MenuCard: FunctionComponent = () => {
    return (
        <View style={{ }}>
            <View style={styles.menuContainers}>
                <ItemMenuCards
                    title={i18n.t("profileScreen.myCart")}
                    icon={<Cart />}
                    routeName={"Cart"}
                />
                <ItemMenuCards
                    title={i18n.t("profileScreen.myOrders")}
                    icon={<Receipt />}
                    routeName={"Orders"}
                />
            </View>
            <View style={styles.menuContainers}>
                <ItemMenuCards
                    title={"Mes avis"}
                    icon={<Star />}
                    routeName={""}
                />
                <ItemMenuCards
                    title={i18n.t("profileScreen.myWallet")}
                    icon={<Wallet />}
                    routeName={"Wallet"}
                />
            </View>
        </View>
    );
};

export default MenuCard;
