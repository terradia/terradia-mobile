import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 16,
        color: "#575757",
        marginBottom: 10
    },
    itemGreen: {
        fontFamily: "MontserratSemiBold",
        fontSize: 14,
        color: "#8FDD3D",
        marginRight: 10
    },
    bottomItemDivider: {
        height: 1,
        width: "100%",
        backgroundColor: "#C7C7CC"
    },
    total: {
        fontFamily: "MontserratBold",
        fontSize: 16,
        color: "#575757"
    },
    totalPrice: {
        fontFamily: "MontserratBold",
        fontSize: 16,
        color: "white",
        marginLeft: 10
    },
    priceContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#8FDD3D",
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 0,
        width: "110%",
        left: 2
    },
    rightAction: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    actionText: {
        color: "white",
        fontSize: 16,
        backgroundColor: "transparent",
        padding: 10
    },
    counterContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5
    },
    countText: {
        width: 100,
        textAlign: "center",
        fontFamily: "MontserratLight",
        color: "#5CC04A",
        fontSize: 35
    },
    rowBack: {
        alignItems: "center",
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15
    },
    backRightBtn: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75
    },
    backRightBtnRight: {
        backgroundColor: "red",
        right: 0
    },
    backTextWhite: {
        color: "#FFF"
    },
    rowFront: {
        backgroundColor: "rgb(242, 242, 242)",
        justifyContent: "center",
        height: 50
    },
    bottomList: {
        marginTop: 20,
        marginBottom: 50
    },
    cardInfoContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    subFieldText: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "#575757"
    },
    subFieldContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginTop: 10
    },
    priceTotalContainer: {
        flexDirection: "row"
    },
    orderButton: {
        color: "white",
        fontFamily: "MontserratBold",
        fontSize: 16
    }
});

export default styles;
