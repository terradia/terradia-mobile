import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Winner from '../../../assets/images/winner.svg';

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
    container: {
        height: 80,
        backgroundColor: '#8FDD3D',
        flexDirection: 'row',
        paddingLeft: 10,
        borderRadius: 10
    },
    textsContainer: {
        justifyContent: 'center'
    },
    firstText: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Montserrat'
    },
    secondText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Montserrat'
    },
    image: {
        position: 'absolute',
        top: -20,
        left: 5,
        width: '200%'
    },
    shadow: {
        elevation: 7,
        shadowColor: 'rgba(143, 221, 61, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 7
    },
    shadowImage: elevationShadowStyle(7, 'black')
});

const PremiumCard: FunctionComponent<any> = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, styles.shadow]}
        >
            <View style={styles.textsContainer}>
                <Text style={styles.firstText}>
                    Tu veux qu'on te livre gratuitement ?
                </Text>
                <Text style={styles.secondText}>Passe membre premium</Text>
            </View>
            <View style={{ position: 'relative' }}>
                <Winner style={[styles.image, styles.shadowImage]} />
            </View>
        </TouchableOpacity>
    );
};

export default PremiumCard;

/* Rectangle */

// background: #8FDD3D;
// box-shadow: 0px 2px 10px rgba(143, 221, 61, 0.8);
// border-radius: 7px;
