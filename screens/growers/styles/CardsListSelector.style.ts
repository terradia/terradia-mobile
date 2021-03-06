import { StyleSheet } from "react-native";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";

const styles = StyleSheet.create({
    mainCard: {
        padding: calcWidth(4),
        borderRadius: 8
    },
    fieldContainer: {},
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
        fontSize: 14
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
