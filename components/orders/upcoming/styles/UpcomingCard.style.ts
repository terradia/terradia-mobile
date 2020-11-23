import { StyleSheet } from "react-native";
import { calcWidth } from "../../../../utils/deviceResponsiveHelper";

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
        marginBottom: calcWidth(4)
    },
    wrapper: {
        marginLeft: calcWidth(4),
        marginRight: calcWidth(4),
        flex: 1,
        marginBottom: -40
    },
    brightness: {
        flex: 1,
        width: "100%",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, .5)",
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
        width: calcWidth(27),
        height: calcWidth(27),
        borderRadius: calcWidth(15),
        padding: calcWidth(3),
        marginLeft: calcWidth(4),
        backgroundColor: "white",
        paddingVertical: calcWidth(2)
    },
    growerImageContainer: {
        position: "absolute",
        top: calcWidth(3),
        zIndex: 10,
        width: "100%",
        flexDirection: "row"
    },
    growerName: {
        color: "white",
        fontSize: 20,
        fontFamily: "MontserratSemiBold",
        maxHeight: 40,
        maxWidth: calcWidth(53)
    },
    openGrower: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "white",
        maxWidth: 200,
        marginTop: calcWidth(2),
        textDecorationLine: "underline"
    }
});
