import React, { FunctionComponent } from 'react';
import {
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import ImageOpacity from '../images/ImageOpacity';
import styles from './styles/SearchCard.style';

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
    height,
    textBottomPositionPercentage,
    textLeftPosition,
    title,
    containerStyle,
    searchCompanies
}) => {
    const BottomPosition = (textBottomPositionPercentage / width) * 100;
    return (
        <TouchableOpacity
            onPress={() => {
                searchCompanies(title);
            }}
            activeOpacity={0.7}
            style={[styles.container, containerStyle, { width }]}
        >
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
        </TouchableOpacity>
    );
};

export default SearchCard;
