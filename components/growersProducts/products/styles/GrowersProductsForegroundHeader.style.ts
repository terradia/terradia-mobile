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

const styles = StyleSheet.create({
    shadow1: elevationShadowStyle(5),
    growerImage: {
        backgroundColor: "white",
        padding: 10
    },
    container: {
        height: 300,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    secondContainer: {
        height: 300 / 2,
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    informationTop: {
        flexDirection: "row",
        marginBottom: 10
    },
    tag: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: "#FFE732"
    },
    rates: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    textNumberRates: {
        color: "#4AA542",
        fontSize: 16
    },
    distanceText: {
        fontSize: 18,
        fontFamily: "Montserrat"
    },
    growerName: {
        fontFamily: "MontserratBold",
        fontSize: 20,
        fontWeight: "500"
    },
    middleContainer: {
        marginLeft: 10,
        flex: 1,
        justifyContent: "space-between"
    },
    descriptionContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        marginLeft: 10
    },
    description: {
        width: "85%",
        fontFamily: "Montserrat"
    },
    showMoreContainer: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center"
    },
    showMore: {
        margin: 3
    }
});

export default styles;
