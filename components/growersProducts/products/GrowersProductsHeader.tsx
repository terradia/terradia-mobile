import React, { FunctionComponent, ReactElement } from 'react';
import { TouchableOpacity, Share } from 'react-native';
import styles from './styles/GrowersProductsHeader.style';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import GrowersProductsCategories from './GrowersProductsCategories';
import { LinearGradient } from 'expo-linear-gradient';
import * as Sharing from 'expo-sharing';
import { Company } from '@interfaces/Companies';
import { Linking } from 'expo';

export const renderFixedHeader: FunctionComponent<any> = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={{ top: 40, left: 10, height: 35, position: 'absolute' }}
            onPress={(): void => {
                navigation.goBack();
            }}
        >
            <FontAwesome
                style={{ margin: 3 }}
                name="arrow-left"
                size={24}
                color="white"
            />
        </TouchableOpacity>
    );
};

declare interface NavBarProductsHeaderProps {
    data: any;
    scrollMainList: any;
    currentIndex: number;
    setBlockUpdateIndex: any;
    setCurrentIndex: any;
    grower: Company;
}

export const renderNavBar: FunctionComponent<NavBarProductsHeaderProps> = ({
    data,
    scrollMainList,
    currentIndex,
    setCurrentIndex,
    setBlockUpdateIndex,
    grower
}) => {
    return (
        <View style={styles.navContainer}>
            <LinearGradient
                colors={['#8FDD3D', '#5CC04A']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.statusBar} />
                <View style={styles.navBar}>
                    <Text style={styles.navBarGrowerName}>{grower.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={async () => {
                                const redirectUrl = Linking.makeUrl(
                                    'products',
                                    {
                                        company: grower.id
                                    }
                                );
                                const result = await Share.share({
                                    message: redirectUrl
                                });
                                console.log(result);
                            }}
                            style={styles.iconsContainer}
                        >
                            <Feather
                                style={styles.shareIcon}
                                name="share"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconsContainer}>
                            <Ionicons
                                style={styles.infoIcon}
                                name="ios-information-circle-outline"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            <LinearGradient
                colors={['#8FDD3D', '#5CC04A']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.categoriesBackground}>
                    <GrowersProductsCategories
                        onPress={(index: number): void => {
                            setBlockUpdateIndex(true);
                            setCurrentIndex(index + 1);
                            scrollMainList(index);
                        }}
                        renderTab={({ title, isActive }): ReactElement => (
                            <View
                                style={[
                                    styles.tabContainer,
                                    {
                                        borderBottomWidth: isActive ? 1.5 : 0,
                                        borderBottomColor: '#8FDD3D'
                                    }
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.tabText,
                                        {
                                            color: isActive
                                                ? '#8FDD3D'
                                                : '#BBBBBB',
                                            fontFamily: 'MontserratBold'
                                        }
                                    ]}
                                >
                                    {title.toUpperCase()}
                                </Text>
                            </View>
                        )}
                        sections={data.map((item, index) => ({
                            ...item,
                            index
                        }))}
                        currentIndex={currentIndex}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};

export const renderImageBackground: FunctionComponent<null> = () => {
    return (
        <View>
            <Image
                source={{
                    uri: `https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg`,
                    height: 250
                }}
            />
            <View style={styles.brightness} />
        </View>
    );
};
