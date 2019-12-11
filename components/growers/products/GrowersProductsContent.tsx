import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {Input} from 'react-native-elements'
import {FontAwesome} from '@expo/vector-icons';

const GrowerProductsHeader = () => {
    const [search, setSearch] = useState('');
    return (
        <View style={{backgroundColor: '#ECECEC'}}>
            <View style={{padding: 20, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: 'white'}}>
                <Input
                    containerStyle={styles.textInput}
                    inputContainerStyle={styles.textInput}
                    onChangeText={text => setSearch(text)}
                    value={search}
                    placeholder={'Rechercher un produit'}
                    leftIconContainerStyle={{marginRight: 10}}
                    leftIcon={
                        <FontAwesome style={{margin: 3}} name="search" size={20} color="#CBCBCB" />
                    }
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 10,
        height: 40,
        borderColor: 'transparent',
        backgroundColor: '#ECECEC'
    }
});
export default GrowerProductsHeader;