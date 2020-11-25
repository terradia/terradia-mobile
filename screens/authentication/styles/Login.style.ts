import { StyleSheet } from "react-native";
import { calcWidth } from '../../../utils/deviceResponsiveHelper';

export default StyleSheet.create({
    gradient: {
        flex: 1
    },
    imageView: {
        alignSelf: "center",
        width: "75%",
        height: 100,
        backgroundColor: "transparent"
    },
    sloganView: {
        alignSelf: "center",
        backgroundColor: "transparent"
    },
    subTitle: {
        color: "white",
        fontFamily: "Montserrat",
        fontSize: 24,
        marginTop: calcWidth(3),
        margin: calcWidth(6),
        width: calcWidth(95),
        textAlign: "center",
        lineHeight: 25
    },
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: 50,
        paddingHorizontal: calcWidth(4)
    }
});
