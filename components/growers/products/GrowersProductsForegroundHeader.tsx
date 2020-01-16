import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, AirbnbRating } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles/GrowersProductsForegroundHeader.style';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import GrowersConfig from '@interfaces/Growers';

export declare interface GrowersProductsForegroundHeaderProps {
    grower?: GrowersConfig;
}

const GrowersProductsForegroundHeader: FunctionComponent<GrowersProductsForegroundHeaderProps> = ({
    grower
}) => {
    return (
        <View
            style={{
                height: 300,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}
        >
            <View
                style={{
                    height: 300 / 2,
                    backgroundColor: '#ECECEC',
                    width: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    padding: 10
                }}
            >
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Avatar
                        size={80}
                        rounded
                        source={{
                            uri:
                                'https://labo-typo.fr/wp-content/uploads/2015/08/labo-typo-laure-saigne-au-brasseur-strasbourg-logo-1468x1525.jpg'
                        }}
                        containerStyle={[styles.shadow1, styles.growerImage]}
                    />
                    <View
                        style={{
                            marginLeft: 10,
                            flex: 1,
                            justifyContent: 'space-between'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <View style={styles.tag}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontWeight: '500'
                                    }}
                                >
                                    NOUVEAUTE
                                </Text>
                            </View>
                            <Text style={{ fontSize: 18 }}>~1km</Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#575757',
                                    fontWeight: '500'
                                }}
                            >
                                {grower.name}
                            </Text>
                        </View>
                        <View style={styles.rates}>
                            <AirbnbRating
                                defaultRating={grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                                starStyle={{ tintColor: '#4AA542' }}
                            />
                            <Text style={styles.textNumberRates}>
                                {grower.numberOfMarks > 99
                                    ? '(99+)'
                                    : '(' + grower.numberOfMarks + ')'}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'center',
                        marginLeft: 10
                    }}
                >
                    <Text numberOfLines={2} style={{ width: '85%' }}>
                        {grower.description}
                    </Text>
                    <TouchableOpacity
                        style={{
                            width: '15%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <FontAwesome
                            style={{ margin: 3 }}
                            name="arrow-down"
                            size={24}
                            color="#4AA542"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default GrowersProductsForegroundHeader;
