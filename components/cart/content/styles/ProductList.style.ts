import { StyleSheet } from "react-native";
import { calcWidth } from "../../../../utils/deviceResponsiveHelper";

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const styles = StyleSheet.create({
    shadow1: elevationShadowStyle(5),
    container: {
        flex: 1,
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 16,
        color: "#575757",
        marginBottom: 10
    },
    card: {
        flex: 1,
        borderRadius: 8,
        marginHorizontal: calcWidth(4),
        height: calcWidth(30),
        padding: calcWidth(3),
        marginBottom: calcWidth(4),
        flexDirection: "row"
    },
    productImageContainer: {
        borderRadius: 8,
        overflow: "hidden",
        height: calcWidth(24),
        width: calcWidth(24)
    },
    middleContainer: {
        width: calcWidth(45),
        marginLeft: calcWidth(3),
        height: calcWidth(24),
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    productName: {
        flex: 1,
        fontSize: 20
    },
    productDescription: {
        flex: 2,
        fontSize: 11,
        maxHeight: calcWidth(10)
    },
    productPriceContainer: {
        flex: 1,
        flexDirection: "row",
        display: "flex",
        alignItems: "flex-end"
    },
    productPrice: {
        fontFamily: "MontserratSemiBold",
        fontSize: 25
    },
    unit: {
        marginTop: calcWidth(2),
        fontSize: 15
    },
    endContainer: {
        width: calcWidth(10),
        marginLeft: calcWidth(4),
        flexDirection: "column"
    },
    endItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    endItemText: {
        fontSize: 20
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
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",
        marginLeft: calcWidth(4),
        marginRight: calcWidth(4),
        marginBottom: calcWidth(4)
    },
    backRightBtn: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: calcWidth(20),
        borderRadius: 8
    },
    backRightBtnRight: {
        backgroundColor: "#FF4A4A",
        right: 0
    },
    backTextWhite: {
        color: "#FFF"
    },
    rowFront: {
        justifyContent: "center"
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
    },
    modalContainer: {
        justifyContent: "flex-end",
        margin: 0
    }
});

export default styles;
