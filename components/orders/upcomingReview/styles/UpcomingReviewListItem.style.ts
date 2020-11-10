import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    numberProductsMainContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "10%"
    },
    numberProductsContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#E4E3E3",
        justifyContent: "center",
        alignItems: "center"
    },
    numberProductsNumber: {
        fontFamily: "MontserratBold",
        fontSize: 16,
        color: "#8B8B8B"
    },
    productNameContainer: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    UnitContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    priceContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    textInfoItem: {
        fontFamily: "MontserratMedium",
        color: "#575757",
        fontSize: 14
    },
    horizontalDivider: {
        height: "100%",
        width: 2,
        backgroundColor: "#E8E8E8"
    }
});

export default styles;
