import { StyleSheet } from "react-native";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    input: {
        marginTop: 4,
        marginLeft: 0,
        marginRight: 0
    },
    containerView: {
        width: "100%",
        paddingBottom: calcWidth(3),
        paddingLeft: calcWidth(4),
        paddingRight: calcWidth(4)
    },
    wrapper: {
        width: "100%",
        alignItems: "center"
    },
    forgotPasswordStyle: {
        paddingTop: 10,
        color: "red",
        alignSelf: "flex-end",
        marginRight: 40
    },
    forgotPasswordText: {
        textDecorationLine: "underline",
        fontFamily: "Montserrat"
    },
    textTouchable: {
        color: "red"
    },
    registerView: {
        width: "100%",
        alignItems: "center",
        paddingTop: 40
    },
    imageView: {
        height: "80%",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    inputContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
        borderColor: "#575757",
        width: calcWidth(92),
        backgroundColor: "transparent"
    },
    inputLabelStyle: {
        color: "#b3b3b3",
        fontFamily: "Montserrat"
    },
    errorText: {
        alignSelf: "flex-start",
        marginLeft: 40,
        fontFamily: "MontserratMedium",
        color: "red"
    }
});
