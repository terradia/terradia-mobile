import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import ItemMenuCards from "./ItemMenuCards";
import Star from "../../../assets/images/star.svg";
import Cart from "../../../assets/images/cart.svg";
import Receipt from "../../../assets/images/receipt.svg";
import Wallet from "../../../assets/images/wallet.svg";

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
        <View style={{ marginTop: 21 }}>
            <View style={styles.menuContainers}>
                <ItemMenuCards
                    title={"Mon panier"}
                    icon={<Cart />}
                    routeName={""}
                />
                <ItemMenuCards
                    title={"Mes recus"}
                    icon={<Receipt />}
                    routeName={""}
                />
            </View>
            <View style={styles.menuContainers}>
                <ItemMenuCards
                    title={"Mes avis"}
                    icon={<Star />}
                    routeName={""}
                />
                <ItemMenuCards
                    title={"Porte feuille"}
                    icon={<Wallet />}
                    routeName={"Wallet"}
                />
            </View>
        </View>
    );
};

export default MenuCard;
