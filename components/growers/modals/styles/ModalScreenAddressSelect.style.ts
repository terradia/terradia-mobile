import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "space-between",
        width: "100%"
    },
    container: {
        flex: 0.9
    },
    listView: {
        elevation: 1,
        flex: 1
    },
    textInputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 10,
        backgroundColor: "#ECECEC",
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    textInput: {
        height: 45,
        fontFamily: "Montserrat",
        backgroundColor: "transparent"
    },
    description: {
        fontWeight: "bold"
    },
    predefinedPlacesDescription: {
        color: "#1faadb",
        height: "auto",
        paddingTop: 10,
        paddingBottom: 10
    },
    placesDescription: {
        height: "auto",
        paddingTop: 7,
        paddingBottom: 7
    },
    row: {
        height: "auto",
        paddingTop: 0,
        paddingBottom: 0
    },
    separator: {
        height: 0,
        backgroundColor: "white"
    },
    buttonBackContainer: {
        flex: 0.1,
        alignItems: "center"
    },
    searchButton: {
        paddingLeft: 10
    },
    buttonBack: {
        fontFamily: "MontserratSemiBold",
        fontSize: 20,
    }
});

export default styles;
