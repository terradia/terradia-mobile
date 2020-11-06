import { StyleSheet } from "react-native";
import { elevationShadowStyle } from "@constants/Layout";

const styles = StyleSheet.create({
    brightness: {
        flex: 1,
        width: "100%",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, .3)",
        position: "absolute",
        borderRadius: 10
    },
    backgroundImage: {
        borderRadius: 10,
        height: 170
    },
    headerTitleContainer: {
        position: "absolute",
        top: 50,
        zIndex: 10,
        width: "100%",
        flexDirection: "column"
    },
    shadow1: elevationShadowStyle(5, "black"),
    growerImage: {
        marginLeft: 20,
        top: 35,
        backgroundColor: "white"
    },
    growerName: {
        color: "white",
        fontSize: 20,
        fontFamily: "MontserratSemiBold",
        maxHeight: 40,
        marginLeft: 20
    },
    openGrower: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "white",
        maxWidth: 200,
        marginTop: 5,
        textDecorationLine: "underline"
    },
    orderCodeContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 20
    },
    orderCodeText: {
        fontFamily: "MontserratSemiBold",
        fontSize: 35,
        color: "#202020",
        top: -20
    }
});

export default styles;
