import React, { FunctionComponent } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./styles/SearchCard.style";
import { ThemedBox, ThemedText } from "@components/theme/Theme";

declare interface SearchCard {
    width: number;
    height: number;
    textBottomPositionPercentage: number;
    textLeftPosition: number;
    title: string;
    containerStyle: StyleProp<ViewStyle>;
    searchCompanies: any;
}

const SearchCard: FunctionComponent<SearchCard> = ({
    width,
    title,
    containerStyle,
    searchCompanies
}) => {
    return (
        <ThemedBox style={styles.container}>
            <TouchableOpacity
                onPress={(): void => {
                    searchCompanies(title);
                }}
                activeOpacity={0.7}
                style={[containerStyle, { width }]}
            >
                <ThemedText style={[styles.name]}>{title}</ThemedText>
            </TouchableOpacity>
        </ThemedBox>
    );
};

export default SearchCard;
