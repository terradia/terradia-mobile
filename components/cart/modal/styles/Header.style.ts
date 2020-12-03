import { StyleSheet } from "react-native";
import { calcWidth } from "../../../../utils/deviceResponsiveHelper";

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: calcWidth(4),
        paddingRight: calcWidth(4)
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: "MontserratBold"
    }
});

export default styles;
