import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        fontSize: 18,
        color: "#575757"
    },
    subFieldText: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "#575757"
    },
    cardInfoContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    addPaymentMethod: {
        fontFamily: "MontserratSemiBold",
        fontSize: 14,
        color: "#8FDD3D",
        marginTop: 10
    }
});
export default styles;
