import { Dimensions, StyleSheet } from "react-native";
import { calcWidth } from '../../../utils/deviceResponsiveHelper';

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "MontserratBold",
        color: "#575757",
        fontSize: 26,
        marginLeft: 5
    },
    container: {
        width: (width * 90) / 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: calcWidth(4),
        padding: calcWidth(4),
        alignSelf: "center",
        borderRadius: 8
    },
    inputTextContainer: {
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    inputText: {
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
        borderColor: "#575757",
        backgroundColor: "transparent"
    },
    forgotContainer: {
        justifyContent: "flex-end",
        marginLeft: calcWidth((100 - 20) / 2)
    },
    forgotText: {
        fontSize: 15,
        textDecorationLine: "underline",
        fontFamily: "MontserratMedium",
    },
    loginText: {
        color: "white",
        fontSize: 24,
        fontFamily: "MontserratSemiBold"
    },
    sendCodeContainer: {
        backgroundColor: "#575757",

        marginTop: 40,
        width: width / 1.3,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    errorText: {
        alignSelf: "flex-start",
        marginLeft: 25,
        marginTop: 5,
        color: "red",
        fontFamily: "MontserratSemiBold"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    buttonChangeEmailContainer: {
        backgroundColor: "red",
        marginTop: 15,
        width: "100%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    changeEmailText: {
        color: "white",
        fontSize: 22,
        fontFamily: "MontserratSemiBold"
    },
    inputLabelStyle: {
        color: "#b3b3b3",
        fontFamily: "Montserrat"
    },
    inputStyle: {
        color: "#575757",
        fontFamily: "Montserrat"
    }
});

export default styles;
