import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";


export const renderHeaders = (value: String) => {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>{value.toUpperCase()}</Text>
        </View>
    )
};

export const renderItems = (value: String) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.textsContainer}>
                    <View style={styles.spacer}>
                        <Text style={[styles.textsColor, styles.productTitle]}>Ambrée St Guillaume</Text>
                    </View>
                    <View style={styles.spacer}>
                        <Text style={styles.textsColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, incididunt, incididunt
                        </Text>
                    </View>
                    <View style={[styles.priceContainer, styles.spacer]}>
                        <View/>
                        <View>
                            <Text style={[styles.priceTag, styles.textsColor]}>4.5$</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: `http://www.aubrasseur.fr/wp-content/uploads/2014/04/20140311-911-Modifier-003.jpg`, height: 100, width: 100 }}/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        overflow: 'hidden',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        width: '100%'
    },
    textsContainer: {
        width: '70%'
    },
    textsColor: {
        color: '#575757'
    },
    productTitle: {
        fontSize: 18
    },
    priceTag: {
        fontSize: 24
    },
    spacer: {
        paddingTop: 5,

    },
    priceContainer: {
        paddingTop: 5,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    imageContainer: {
        justifyContent: 'center',
        width: '30%',
        alignItems: 'center'
    },
    image: {
        borderRadius: 20
    }
});
