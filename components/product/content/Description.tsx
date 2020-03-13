import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Product } from '@interfaces/Companies';

declare interface DescriptionProps {
    product: Product;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    title: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: '#575757',
        marginBottom: 5
    },
    text: {
        fontFamily: 'MontserratMedium',
        color: '#7D7D7D',
        fontSize: 14,
        marginBottom: 10,
        marginLeft: 10
    }
});
const Description: FunctionComponent<DescriptionProps> = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Description du produit</Text>
            <Text style={styles.text}>{product.description}</Text>
            <Text style={styles.title}>Conseil du brasseur</Text>
            <Text style={styles.text}>
                Bière « apéritive » et festive ou à déguster tout au long d’un
                repas en accompagnement de plats traditionnels alsaciens.
            </Text>
        </View>
    );
};

export default Description;
