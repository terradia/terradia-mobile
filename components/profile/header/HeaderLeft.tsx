import React, { FunctionComponent } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

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
            <Avatar
                size={40}
                rounded
                source={{
                    uri:
                        'https://labo-typo.fr/wp-content/uploads/2015/08/labo-typo-laure-saigne-au-brasseur-strasbourg-logo-1468x1525.jpg'
                }}
                containerStyle={{ marginLeft: 10 }}
            />
            <Text style={styles.name}>Victor</Text>
        </View>
    );
};

export default HeaderLeft;
