import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

class GrowerCard extends Component {
    render() {
        return (
            <View style={[style.wrapper, style.shadow1]}>
                <Image source={{
                    uri: 'https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg'}}
                       style={style.backgroundImage}/>
                <View style={style.bottomView}>
                    <Text>
                        Salut
                    </Text>
                </View>
            </View>
        )
    };
}

import {StyleSheet} from 'react-native';

function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const style = StyleSheet.create({
    shadow1: elevationShadowStyle(5),
    wrapper: {
        borderRadius: 8,
        marginLeft: 15,
        marginRight: 15,
        minHeight: 30,
        height: 80,
        overflow: 'hidden',
    },
    bottomView: {
        borderRadius: 8,
        backgroundColor: 'white',
        height: 50,
        flex: 2,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        overflow: 'visible'
    }
});

export default GrowerCard;