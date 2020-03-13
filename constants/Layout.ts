import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const elevationShadowStyle = (elevation, color) => {
    return {
        elevation,
        shadowColor: color,
        shadowOffset: { width: 3, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.4 * elevation
    };
};

export { elevationShadowStyle };

export default {
    window: {
        width,
        height
    },
    isSmallDevice: width < 375
};
