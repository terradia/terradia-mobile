import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ThemeContext, ThemedBox, withTheme } from "@components/theme/Theme";
import { calcWidth } from "../../utils/deviceResponsiveHelper";

const styles = StyleSheet.create({
    container: {
        marginTop: calcWidth(18),
        justifyContent: "center",
        marginLeft: calcWidth(4)
    },
    box: {
        width: calcWidth(90),
        height: 150,
        marginBottom: calcWidth(4),
        borderRadius: 10
    }
});

interface Props {
    theme: any;
}

const CardListLoader: FunctionComponent<Props> = ({ theme, ...props }) => {
    return (
        <SkeletonPlaceholder
            backgroundColor={theme.palette.lighterBackgroundColor}
            highlightColor={theme.palette.card.backgroundColor}
        >
            <ThemedBox style={styles.container}>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
            </ThemedBox>
        </SkeletonPlaceholder>
    );
};

export default withTheme(CardListLoader);
