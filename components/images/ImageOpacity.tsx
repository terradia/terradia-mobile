import React, { FunctionComponent } from 'react';
import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    brightness: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        position: 'absolute'
    }
});

declare interface ImageOpacityProps {
    style?: StyleProp<ImageStyle>;
    source: ImageSourcePropType;
    borderRadius?: number;
    width: number;
    height: number;
}

const ImageOpacity: FunctionComponent<ImageOpacityProps> = ({
    style,
    source,
    borderRadius,
    width,
    height
}) => {
    return (
        <View>
            <Image
                source={source}
                style={[style, { borderRadius, width, height }]}
            />
            <View
                style={[styles.brightness, { borderRadius, width, height }]}
            />
        </View>
    );
};

export default ImageOpacity;
