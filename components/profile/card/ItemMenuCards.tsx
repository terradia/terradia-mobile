import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { ThemedBox, withTheme } from "@components/theme/Theme";

declare interface ItemMenuCardsProps {
    title: string;
    icon: any;
    routeName: string;
    theme: any;
}

function elevationShadowStyle(elevation, color) {
    return {
        elevation,
        shadowColor: color,
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const styles = StyleSheet.create({
    shadow: elevationShadowStyle(5, "black"),
    text: {
        fontSize: 16,
        fontFamily: "MontserratSemiBold",
        flex: 1,
        marginTop: 20
    },
    icon: {
        flex: 1.2
    },
    container: {
        width: "48%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 10
    }
});

const ItemMenuCard: FunctionComponent<ItemMenuCardsProps> = ({
    title,
    icon,
    theme,
    routeName
}) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[
                styles.shadow,
                styles.container,
                {
                    backgroundColor: theme.palette.card.backgroundColor
                }
            ]}
            onPress={(): boolean => navigate(routeName)}
        >
            <View style={styles.icon}>{icon}</View>
            <Text
                style={[
                    styles.text,
                    {
                        color: theme.palette.fontColor
                    }
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default withTheme(ItemMenuCard);
