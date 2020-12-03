import { calcWidth } from "../../../utils/deviceResponsiveHelper";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop: calcWidth(2),
        marginBottom: calcWidth(4)
    },
    divider: {
        backgroundColor: "#C7C7C7",
        width: "100%",
        height: 2
    },
    bottomInfoContainers: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: calcWidth(2)
    },
    bottomInfoText: {
        fontFamily: "Montserrat",
        fontSize: 16
    },
    bottomPriceText: {
        fontFamily: "MontserratMedium",
        fontSize: 16
    },
    bottomContainerInfo: {
        flexDirection: "row"
    },
    infoContainer: {
        marginLeft: calcWidth(2)
    },
    totalText: {
        fontFamily: "Montserrat",
        fontSize: 25
    },
    totalPrice: {
        fontFamily: "MontserratSemiBold",
        fontSize: 25
    }
});
