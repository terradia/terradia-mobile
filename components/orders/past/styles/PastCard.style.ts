import { StyleSheet } from "react-native";

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

export default StyleSheet.create({
    shadow1: elevationShadowStyle(5),
    mainContainer: {
        marginBottom: 10,
        marginTop: 10
    },
    wrapper: {
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
        marginBottom: -40
    },
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
    bottomView: {
        borderRadius: 10,
        backgroundColor: "white",
        top: -40,
        left: 0,
        width: "100%",
        position: "relative"
    },

    backgroundImage: {
        borderRadius: 10,
        height: 140
    },
    growerImage: {
        marginLeft: 20,
        backgroundColor: "white"
    },
    growerImageContainer: {
        position: "absolute",
        top: 10,
        zIndex: 10,
        width: "100%",
        flexDirection: "row"
    },
    growerName: {
        color: "white",
        fontSize: 20,
        fontFamily: "MontserratSemiBold",
        maxHeight: 40,
        maxWidth: 200
    },
    openGrower: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "white",
        maxWidth: 200,
        marginTop: 5,
        textDecorationLine: "underline"
    }
});
