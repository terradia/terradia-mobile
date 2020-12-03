import { StyleSheet } from "react-native";
import { calcWidth } from '../../../../utils/deviceResponsiveHelper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    modalContainer: {
        alignItems: "flex-start",
        margin: 0,
        marginTop: 40,
        width: "100%",
        backgroundColor: "transparent",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    header: {
        width: "85%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: calcWidth(4),
        marginRight: calcWidth(4)
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: "MontserratBold"
    }
});

export default styles;
