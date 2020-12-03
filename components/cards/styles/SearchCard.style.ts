import { StyleSheet } from "react-native";
import { calcWidth } from '../../../utils/deviceResponsiveHelper';

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

export default StyleSheet.create({
    container: {
        position: "relative",
        borderRadius: 8,
        marginLeft: calcWidth(4),
        marginBottom: calcWidth(4),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        fontFamily: "MontserratSemiBold",
        fontSize: 16
    }
});
