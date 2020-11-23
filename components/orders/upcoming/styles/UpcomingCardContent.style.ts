import { StyleSheet } from "react-native";
import { calcWidth } from "../../../../utils/deviceResponsiveHelper";

const styles = StyleSheet.create({
    orderContainer: {
        justifyContent: "flex-end",
        marginRight: 20,
        marginTop: 10,
        flexDirection: "row"
    },
    orderText: {
        fontFamily: "MontserratMedium",
        fontSize: 14
    },
    orderNumber: {
        fontFamily: "MontserratBold",
        fontSize: 14
    },
    statusContainer: {
        marginRight: calcWidth(4),
        marginLeft: calcWidth(4)
    },
    statusLine: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: calcWidth(2)
    },
    statusIconContainer: {
        width: 20,
        justifyContent: "center"
    },
    statusText: {
        marginLeft: calcWidth(4),
        fontFamily: "MontserratMedium",
        fontSize: 14
    },
    divider: {
        flex: 1,
        backgroundColor: "#E8E8E8",
        height: 1
    },
    dateText: {
        marginLeft: calcWidth(2),
        textAlign: "right",
        fontFamily: "MontserratMedium",
        fontSize: 12
    },
    dividerDate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: calcWidth(84),
        marginTop: calcWidth(2),
        marginBottom: calcWidth(2)
    },
    numberProductsContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    numberProductsNumber: {
        fontFamily: "MontserratBold",
        fontSize: 16
    },
    numberProductsText: {
        fontFamily: "MontserratMedium",
        fontSize: 13,
        marginLeft: calcWidth(2)
    },
    totalText: {
        fontFamily: "MontserratMedium",
        fontSize: 16,
        marginLeft: 10
    },
    totalNumber: {
        fontFamily: "MontserratSemiBold",
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
