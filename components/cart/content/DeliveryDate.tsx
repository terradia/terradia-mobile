import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    topDivider: {
        height: 1,
        backgroundColor: '#C7C7CC',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    bottomDivider: {
        height: 1,
        backgroundColor: '#C7C7CC',
        marginBottom: 30
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'MontserratLight',
        fontSize: 12,
        color: '#575757'
    },
    spacer: {
        marginTop: 20
    }
});

const DeliveryDate: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topDivider} />
            <View style={[styles.textContainer, styles.spacer]}>
                <Text style={styles.text}>Livraison prevu aujourd'hui: dans la matinée</Text>
            </View>
            <View style={[styles.bottomDivider, styles.spacer]} />
        </View>
    );
};

export default DeliveryDate;
