import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        overflow: "hidden",
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    container: {
        flexDirection: "row",
        width: "100%"
    },
    textsContainer: {
        width: "70%"
    },
    textsColor: {
        fontFamily: "Montserrat"
    },
    productTitle: {
        fontSize: 18,
        fontFamily: "MontserratSemiBold"
    },
    productDescription: {
        fontFamily: "MontserratLight",
        fontSize: 13,
        maxHeight: 65
    },
    priceTag: {
        fontSize: 24
    },
    spacer: {
        paddingTop: 5
    },
    priceContainer: {
        paddingTop: 5,
        alignItems: "flex-end",
        paddingRight: 20
    },
    imageContainer: {
        justifyContent: "center",
        width: "30%",
        alignItems: "center"
    },
    image: {
        borderRadius: 20
    }
});

export default styles;
