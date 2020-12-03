import { StyleSheet } from "react-native";
import { calcWidth } from "../../../../utils/deviceResponsiveHelper";

const styles = StyleSheet.create({
    statusLine: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    statusText: {
        marginLeft: 10,
        fontFamily: "MontserratMedium",
        fontSize: 14,
        color: "#575757"
    },
    container: {
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    cardContainer: {
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 15,
        alignItems: "center"
    },
    paidWithText: {
        fontFamily: "MontserratMedium",
        fontSize: 14,
        color: "#575757"
    },
    box: {
        width: "60%",
        height: 40,
        marginBottom: 20,
        marginLeft: 5,
        marginTop: 10,
        borderRadius: 10,
        alignSelf: "flex-end"
    },
    swiperTextDisable: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
        color: "#C2C2C2"
    },
    swiperTextEnable: {
        fontFamily: "MontserratMedium",
        fontSize: 18,
        color: "#5CC04A"
    }
});

export default styles;
