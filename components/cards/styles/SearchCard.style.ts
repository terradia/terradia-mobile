import { StyleSheet } from 'react-native';

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

export default StyleSheet.create({
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
