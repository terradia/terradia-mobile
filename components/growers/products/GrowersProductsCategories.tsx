import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, Text, FlatList} from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

const FILTER = ['Bio', 'Viande', 'Poisson', 'Légumes', 'Fruits', 'Oeuf', 'Produits laitier'];


export declare interface GrowersProductsCategories {
    categories?: string[];
}

const GrowersProductsCategories = (props: GrowersProductsCategories) => {
    const _renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <FlatList
                data={props.categories}
                keyExtractor={item => item}
                horizontal={true}
                renderItem={({item}) => _renderItem(item)}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
};
export default GrowersProductsCategories;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 5
    },
    text: {
        fontWeight: "600",
        marginLeft: 5,
        marginRight: 5
    },

    itemHeaderText: {
        color: '#274BDB'
    }
});