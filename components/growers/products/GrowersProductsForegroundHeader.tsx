import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Avatar, AirbnbRating } from 'react-native-elements'
import {FontAwesome} from "@expo/vector-icons";


export declare interface GrowersProductsForegroundHeaderProps {
    grower?: object;
}

const GrowersProductsForegroundHeader = (props: GrowersProductsForegroundHeaderProps) => {
    return (
        <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{height: 300 / 2, backgroundColor: '#ECECEC', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 10}}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Avatar
                        size={80}
                        rounded
                        source={{
                            uri:
                                'https://labo-typo.fr/wp-content/uploads/2015/08/labo-typo-laure-saigne-au-brasseur-strasbourg-logo-1468x1525.jpg',
                        }}
                        containerStyle={[styles.shadow1, styles.growerImage]}
                    />
                    <View style={{marginLeft: 10, flex: 1, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={styles.tag}>
                                <Text style={{color: 'white', fontWeight: '500'}}>
                                    NOUVEAUTE
                                </Text>
                            </View>
                            <Text style={{fontSize: 18}}>
                                ~1km
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 20, color: '#575757', fontWeight: '500'}}>{ props.grower.name }</Text>
                        </View>
                        <View style={styles.rates}>
                            <AirbnbRating
                                defaultRating={props.grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                                selectedColor={'#4AA542'}
                            />
                            <Text style={styles.textNumberRates}>{props.grower.numberOfMarks > 99 ? '(99+)' : '(' + props.grower.numberOfMarks+ ')'}</Text>
                        </View>
                    </View>

                </View>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', marginLeft: 10}}>
                    <Text  numberOfLines={2} style={{width: '85%'}}>
                        {props.grower.description}
                    </Text>
                    <TouchableOpacity style={{width: '15%', justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome style={{margin: 3}} name="arrow-down" size={24} color="#4AA542" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};


function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}
const styles = StyleSheet.create({
    shadow1: elevationShadowStyle(5),
    growerImage: {
    },
    tag: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: '#FFE732'
    },
    rates: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textNumberRates: {
        color: '#4AA542',
        fontSize: 16
    },
});
export default GrowersProductsForegroundHeader;