import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoriesBackgroundContainer: {
        backgroundColor: "#5CC04A"
    },
    categoriesBackground: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    backgroundContainer: {
        backgroundColor: "transparent"
    },
    navBarGrowerName: {
        color: "white",
        fontSize: 20,
        fontFamily: "MontserratSemiBold",
        marginLeft: 35
    },
    iconsContainer: {},
    shareIcon: {
        margin: 3,
        marginRight: 8
    },
    infoIcon: {
        margin: 3,
        marginRight: 8
    },
    brightness: {
        flex: 1,
        width: "100%",
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, .3)",
        position: "absolute",
        borderRadius: 10
    },
    navContainer: {
        height: 200
    },
    statusBar: {
        height: 30,
        backgroundColor: "transparent"
    },
    navBar: {
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "transparent",
        marginHorizontal: 10
    },
    tabContainer: {
        borderBottomColor: "#090909"
    },
    tabText: {
        padding: 15,
        color: "#9e9e9e",
        fontSize: 18,
        fontWeight: "500"
    }
});

export default styles;
