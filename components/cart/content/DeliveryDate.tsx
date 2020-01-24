import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/DeliveryDate.style';

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
