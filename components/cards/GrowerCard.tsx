import React, { FunctionComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AirbnbRating, Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import style from './styles/GrowerCard.style';
import { NavigationParams } from 'react-navigation';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import GrowersConfig from '@interfaces/Growers';
// @ts-ignore
import i18n from '@i18n/i18n';

export declare interface GrowerCard {
    navigation?: NavigationParams;
    grower?: GrowersConfig;
}

const GrowerCard: FunctionComponent<GrowerCard> = ({ navigation, grower }) => {
    return (
        <View style={style.mainContainer}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={[style.wrapper, style.shadow1]}
                onPress={(): void =>
                    navigation.navigate('GrowersProducts', {
                        grower
                    })
                }
            >
                <Image
                    source={{
                        uri:
                            'https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg'
                    }}
                    style={style.backgroundImage}
                />
                <View style={style.brightness} />
                <View style={style.absoluteView}>
                    <View style={style.headerView}>
                        <View style={style.rates}>
                            <AirbnbRating
                                selectedColor={'white'}
                                defaultRating={grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                            />
                            <Text style={style.textNumberRates}>
                                {grower.numberOfMarks > 99
                                    ? '(99+)'
                                    : '(' + grower.numberOfMarks + ')'}
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <AntDesign
                                style={[{ margin: 2 }, style.shadow1]}
                                name="heart"
                                size={24}
                                color="#60C34A"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.growerImageContainer}>
                    <Avatar
                        size={100}
                        rounded
                        source={{
                            uri:
                                'https://labo-typo.fr/wp-content/uploads/2015/08/labo-typo-laure-saigne-au-brasseur-strasbourg-logo-1468x1525.jpg'
                        }}
                        containerStyle={[style.shadow1, style.growerImage]}
                    />
                    <Text style={style.growerName}>{grower.name}</Text>
                </View>
                <View style={style.bottomView}>
                    <View style={style.bottomElements}>
                        <Text style={style.discoverProducts}>
                            {grower.products.length > 9
                                ? '(9+)'
                                : grower.products.length}{' '}
                            {i18n.t('growersCard.productsToDiscover')}
                        </Text>
                        <View style={style.bottomInformation}>
                            <View style={style.tag}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontWeight: '500'
                                    }}
                                >
                                    {i18n.t('tags.new')}
                                </Text>
                            </View>
                            <Text style={style.bottomInformationDistance}>
                                ~900m
                            </Text>
                            <Text style={style.bottomInformationDistance}>
                                €€
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default GrowerCard;
