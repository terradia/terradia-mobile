import { StyleSheet } from "react-native";
import { elevationShadowStyle } from "@constants/Layout";

export default StyleSheet.create({
    shadow1: elevationShadowStyle(5, "black"),
    emptyContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        margin: 20,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    youHaveNoOrderText: {
        fontFamily: "Montserrat",
        color: "#8B8B8B",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    discoverProducersText: {
        fontFamily: "MontserratMedium",
        color: "#5CC04A",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 17
    },
    discoverProducersContainer: {
        marginTop: 20,
        borderColor: "#5CC04A",
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "center"
    }
});
