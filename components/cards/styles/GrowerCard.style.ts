import { StyleSheet } from "react-native";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";

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
        height: 150 + calcWidth(4),
        marginBottom: calcWidth(2),
        marginTop: calcWidth(2)
    },
    absoluteView: {
        position: "absolute",
        marginTop: calcWidth(2),
        marginLeft: calcWidth(4),
        marginRight: calcWidth(4),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    rates: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textNumberRates: {
        color: "white",
        fontSize: 18,
        fontFamily: "Montserrat",
        marginLeft: calcWidth(1)
    },
    rating: {
        backgroundColor: "transparent"
    },
    wrapper: {
        marginLeft: calcWidth(4),
        marginRight: calcWidth(4),
        flex: 1,
        position: "relative",
        height: 150
    },
    brightness: {
        flex: 1,
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, .3)",
        position: "absolute",
        borderRadius: 10
    },
    bottomView: {
        borderRadius: 10,
        height: 70,
        bottom: 0,
        left: 0,
        width: "100%",
        position: "absolute",
        paddingLeft: calcWidth(30)
    },
    bottomElements: {
        flex: 1,
        marginRight: 10,
        justifyContent: "space-evenly"
    },
    backgroundImage: {
        borderRadius: 10,
        height: 150
    },
    productName: {
        fontSize: 20
    },
    growerImage: {
        marginLeft: calcWidth(4),
        width: calcWidth(27),
        height: calcWidth(27),
        borderRadius: calcWidth(15),
        padding: calcWidth(3),
        backgroundColor: "white"
    },
    growerImageContainer: {
        position: "absolute",
        bottom: calcWidth(3),
        zIndex: 10,
        flexDirection: "row"
    },
    growerName: {
        marginLeft: calcWidth(2),
        marginTop: calcWidth(4),
        color: "white",
        fontSize: 20,
        fontFamily: "MontserratSemiBold",
        maxHeight: 40,
        maxWidth: calcWidth(54)
    },
    discoverProducts: {
        marginLeft: calcWidth(4),
        color: "#A1A1A1",
        fontWeight: "500",
        fontSize: 15,
        fontFamily: "Montserrat"
    },
    tag: {
        padding: calcWidth(1),
        borderRadius: calcWidth(3),
        backgroundColor: "#FFE732",
        fontFamily: "MontserratSemiBold"
    },
    bottomInformation: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomInformationDistance: {
        color: "#A1A1A1",
        fontSize: 15,
        fontFamily: "Montserrat"
    }
});
