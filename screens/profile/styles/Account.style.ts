import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10
    },
    fieldContainer: {
        marginLeft: 15,
        marginRight: 15
    },
    subFieldContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginTop: 10
    },
    fieldTitle: {
        fontFamily: "MontserratBold",
        fontSize: 18
    },
    subFieldText: {
        fontFamily: "Montserrat",
        fontSize: 14,
    },
    verifiedText: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "#4AA542"
    },
    nonVerifiedText: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "#F6A300"
    },
    rightContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    signOutContainer: {
        marginTop: 40,
        alignItems: "center"
    },
    signOut: {
        fontFamily: "MontserratSemiBold",
        fontSize: 20,
        color: "#4AA542"
    }
});

export default styles;
