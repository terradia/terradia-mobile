import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    orderContainer: {
        justifyContent: "flex-end",
        marginRight: 20,
        marginTop: 10,
        flexDirection: "row"
    },
    orderText: {
        fontFamily: "MontserratMedium",
        color: "#575757",
        fontSize: 14
    },
    orderNumber: {
        fontFamily: "MontserratBold",
        color: "#575757",
        fontSize: 14
    },
    statusContainer: {
        marginRight: 20,
        marginLeft: 20
    },
    statusLine: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    statusText: {
        marginLeft: 10,
        fontFamily: "MontserratMedium",
        fontSize: 14,
        color: "#575757"
    },
    divider: {
        width: "60%",
        backgroundColor: "#E8E8E8",
        height: 1
    },
    dateText: {
        marginLeft: 10,
        fontFamily: "MontserratMedium",
        color: "#575757",
        fontSize: 12
    },
    dividerDate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
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
    numberProductsText: {
        fontFamily: "MontserratMedium",
        color: "#575757",
        fontSize: 13,
        marginLeft: 5
    },
    totalText: {
        fontFamily: "MontserratMedium",
        color: "#575757",
        fontSize: 16,
        marginLeft: 10
    },
    totalNumber: {
        fontFamily: "MontserratSemiBold",
        color: "#575757",
        fontSize: 16
    },
    buttonContainer: {
        backgroundColor: "#5CC04A",
        marginTop: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 20
    },
    seeOrder: {
        fontFamily: "MontserratMedium",
        color: "white",
        fontSize: 16
    },
    numberProductsMainContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    totalPriceProductsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export default styles;
