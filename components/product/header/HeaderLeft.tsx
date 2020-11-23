import React, { FunctionComponent } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    name: {
        fontFamily: 'MontserratBold',
        fontSize: 30,
        color: 'white',
        marginLeft: 15
    }
});

const HeaderLeft: FunctionComponent<any> = () => {
    const navigator = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigator.goBack()}>
            <Feather name="arrow-left" size={28} color={'white'} />
        </TouchableOpacity>
    );
};

export default HeaderLeft;
