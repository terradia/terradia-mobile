import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AirbnbRating, Avatar} from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import style from './styles/GrowerCard.style'


export declare interface GrowerCard {
    navigation?: any;
    grower?: object;
}

const GrowerCard = (props: GrowerCard) => {
    return (
        <View style={style.mainContainer}>
            <TouchableOpacity activeOpacity={0.7} style={[style.wrapper, style.shadow1]}
                              onPress={() => props.navigation.navigate('GrowersProducts', { grower: props.grower})}>
                <Image
                    source={{
                        uri: 'https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg'}}
                    style={style.backgroundImage}>
                </Image>
                <View style={style.brightness}/>
                <View style={style.absoluteView}>
                    <View style={style.headerView}>
                        <View style={style.rates}>
                            <AirbnbRating
                                defaultRating={props.grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                                selectedColor={'white'}
                            />
                            <Text style={style.textNumberRates}>{props.grower.numberOfMarks > 99 ? '(99+)' : '(' + props.grower.numberOfMarks+ ')'}</Text>
                        </View>
                        <TouchableOpacity>
                            <AntDesign style={[{margin: 2}, style.shadow1]} name="heart" size={24} color="#60C34A" />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={style.growerImageContainer}>
                    <Avatar
                        size={100}
                        rounded
                        source={{
                            uri:
                                'https://labo-typo.fr/wp-content/uploads/2015/08/labo-typo-laure-saigne-au-brasseur-strasbourg-logo-1468x1525.jpg',
                        }}
                        containerStyle={[style.shadow1, style.growerImage]}
                    />
                    <Text style={style.growerName}>{props.grower.name}</Text>
                </View>
                <View style={style.bottomView}>
                    <View style={style.bottomElements}>
                        <Text style={style.discoverProducts}>
                            {props.grower.products.length > 9 ? '(9+)' : props.grower.products.length} produits a découvrir
                        </Text>
                        <View style={style.bottomInformation}>
                            <View style={style.tag}>
                                <Text style={{color: 'white', fontWeight: '500'}}>
                                    NOUVEAUTE
                                </Text>
                            </View>
                            <Text style={style.bottomInformationText}>~900m</Text>
                            <Text style={style.bottomInformationText}>€€</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default GrowerCard;