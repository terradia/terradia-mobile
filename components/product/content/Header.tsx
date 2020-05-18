import React, { FunctionComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ProductData } from '@interfaces/Companies';
import { elevationShadowStyle } from '@constants/Layout';

declare interface HeaderProps {
    product: ProductData;
}

const styles = StyleSheet.create({
    tag: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: '#FFE732',
        width: 100,
        marginLeft: 20,
        marginTop: 5
    },
    container: {
        height: 110,
        backgroundColor: '#F3F3F3',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row'
    },
    leftContainer: {
        flex: 8,
        marginRight: 10
    },
    productName: {
        fontFamily: 'MontserratBold',
        fontSize: 17
    },
    tagText: {
        fontFamily: 'MontserratSemiBold',
        color: 'white',
        fontWeight: '500'
    },
    rightContainer: {
        flex: 4,
        alignItems: 'center'
    },
    priceText: {
        color: '#5CC04A',
        fontFamily: 'MontserratBold',
        fontSize: 30,
        alignSelf: 'flex-end'
    },
    unitPrice: {
        color: '#B4B4B4',
        fontFamily: 'Montserrat',
        fontSize: 15,
        alignSelf: 'flex-end'
    },
    image: {
        borderRadius: 10
    }
});

const Header: FunctionComponent<HeaderProps> = ({ product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View>
                    <Text style={styles.productName}>{product.name}</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tagText}>NOUVEAUTE</Text>
                </View>
                <Text style={styles.priceText}>
                    {product.price.toFixed(2) + ' €'}
                </Text>
                <Text style={styles.unitPrice}>Prix unitaire</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={elevationShadowStyle(5, 'black')}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `http://www.aubrasseur.fr/wp-content/uploads/2014/04/20140311-911-Modifier-003.jpg`,
                            height: 100,
                            width: 100
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Header;
