import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, AirbnbRating } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles/GrowersProductsForegroundHeader.style';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import GrowersConfig from '@interfaces/Growers';

declare interface GrowersProductsForegroundHeaderProps {
    grower?: GrowersConfig;
}

const GrowersProductsForegroundHeader: FunctionComponent<GrowersProductsForegroundHeaderProps> = ({
    grower
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <View style={styles.informationTop}>
                    <Avatar
                        size={80}
                        rounded
                        source={{
                            uri:
                                'https://labo-typo.fr/wp-content/uploads/2015/08/labo-typo-laure-saigne-au-brasseur-strasbourg-logo-1468x1525.jpg'
                        }}
                        containerStyle={[styles.shadow1, styles.growerImage]}
                    />
                    <View style={styles.middleContainer}>
                        <View style={styles.topContainer}>
                            <View style={styles.tag}>
                                <Text
                                    style={{
                                        fontFamily: 'MontserratSemiBold',
                                        color: 'white',
                                        fontWeight: '500'
                                    }}
                                >
                                    NOUVEAUTE
                                </Text>
                            </View>
                            <Text style={styles.distanceText}>~1km</Text>
                        </View>
                        <View>
                            <Text style={styles.growerName}>{grower.name}</Text>
                        </View>
                        <View style={styles.rates}>
                            <AirbnbRating
                                defaultRating={grower.averageMark}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                                selectedColor={'#4AA542'}
                            />
                            <Text style={styles.textNumberRates}>
                                {grower.numberOfMarks > 99
                                    ? '(99+)'
                                    : '(' + grower.numberOfMarks + ')'}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text numberOfLines={2} style={styles.description}>
                        {grower.description}
                    </Text>
                    <TouchableOpacity style={styles.showMoreContainer}>
                        <FontAwesome
                            style={styles.showMore}
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
