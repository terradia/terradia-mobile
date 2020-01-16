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

export default styles = StyleSheet.create({
    shadow1: elevationShadowStyle(5),
    growerImage: {},
    tag: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: '#FFE732'
    },
    rates: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textNumberRates: {
        color: '#4AA542',
        fontSize: 16
    }
});