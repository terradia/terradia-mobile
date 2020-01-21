import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import ImageOpacity from '../images/ImageOpacity';

declare interface SearchCard {
    width: number;
    height: number;
    textBottomPositionPercentage: number;
    textLeftPosition: number;
    title: string;
    containerStyle: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    name: {
        position: 'absolute',
        bottom: 25,
        left: 6,
        color: 'white',
        fontFamily: 'MontserratSemiBold',
        fontSize: 16
    }
});

const SearchCard: FunctionComponent<SearchCard> = ({
    width,
    height,
    textBottomPositionPercentage,
    textLeftPosition,
    title,
    containerStyle
}) => {
    const BottomPosition = (textBottomPositionPercentage / width) * 100;
    return (
        <View style={[styles.container, containerStyle, { width }]}>
            <ImageOpacity
                width={width}
                height={height}
                source={{
                    uri:
                        'https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg'
                }}
                borderRadius={20}
            />
            <Text
                style={[
                    styles.name,
                    { bottom: BottomPosition, left: textLeftPosition }
                ]}
            >
                {title}
            </Text>
        </View>
    );
};

export default SearchCard;
