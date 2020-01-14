import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, Text, FlatList} from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

const FILTER = ['Trier', 'Prix', 'Nouveautés', 'diététique'];

const GrowerFilter = () => {
    const _renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.text}>{item}</Text>
                <Ionicons name="md-arrow-dropdown" size={17}/>
            </TouchableOpacity>
        )
    };

    const _renderItemHeader = () => {
        return (
            <TouchableOpacity onPress={() => {

            }} style={styles.itemHeader}>
                <FontAwesome style={{margin: 2}} name="filter" size={19} color="#60C34A" />
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <FlatList
                data={FILTER}
                keyExtractor={item => item}
                horizontal={true}
                ListHeaderComponent={() => _renderItemHeader()}
                renderItem={({item}) => _renderItem(item)}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
};
export default GrowerFilter;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ECECEC',
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
    itemHeader: {
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        margin: 5,
        padding: 5,
        marginLeft: 10,
        flexDirection: 'row'
    },
    itemHeaderText: {
        color: '#274BDB'
    }
});