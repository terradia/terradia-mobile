import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontFamily: 'MontserratBold',
        fontSize: 30,
        color: 'white',
        marginLeft: 15
    }
});

const HeaderLeft: FunctionComponent<any> = () => {
    return (
        <View style={styles.container}>
            <Feather name="share" size={24} color="white" />
        </View>
    );
};

export default HeaderLeft;
