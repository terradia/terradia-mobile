import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    container: {
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    divider: {
        backgroundColor: "#E8E8E8",
        width: "100%",
        height: 2,
        marginTop: 20
    },
    bottomInfoContainers: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    bottomInfoText: {
        fontFamily: "Montserrat",
        fontSize: 16,
        color: "#575757"
    },
    bottomPriceText: {
        fontFamily: "MontserratMedium",
        fontSize: 16,
        color: "#575757"
    },
    bottomContainerInfo: {
        flexDirection: "row"
    },
    infoContainer: {
        marginLeft: 10
    },
    totalText: {
        fontFamily: "Montserrat",
        fontSize: 25,
        color: "#575757"
    },
    totalPrice: {
        fontFamily: "MontserratSemiBold",
        fontSize: 25,
        color: "#575757"
    },
    cardContainer: {
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 15,
        alignItems: "center"
    },
    paidWithText: {
        fontFamily: "MontserratMedium",
        fontSize: 14,
        color: "#575757"
    },
    box: {
        width: "60%",
        height: 40,
        marginBottom: 20,
        marginLeft: 5,
        marginTop: 10,
        borderRadius: 10,
        alignSelf: "flex-end"
    }
});

export default styles;
