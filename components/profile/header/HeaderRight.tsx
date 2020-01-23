import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
            <Ionicons
                style={{ margin: 3 }}
                name="ios-help-circle-outline"
                size={28}
                color="white"
            />
            <Ionicons
                style={{ margin: 3, marginLeft: 10 }}
                name="ios-cog"
                size={28}
                color="white"
            />
        </View>
    );
};

export default HeaderLeft;
