import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

declare interface ItemMenuCardsProps {
    title: string;
    icon: any;
}

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
    shadow: elevationShadowStyle(5, 'black'),
    text: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold',
        flex: 1,
        marginTop: 20
    },
    icon: {
        flex: 1.2
    }
});

const ItemMenuCard: FunctionComponent<ItemMenuCardsProps> = ({
    title,
    icon
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.shadow,
                {
                    backgroundColor: 'white',
                    width: '45%',
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    padding: 10
                }
            ]}
        >
            <View style={styles.icon}>{icon}</View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ItemMenuCard;
