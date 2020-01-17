import React, { FunctionComponent, ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles/GrowersProductsHeader.style';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import GrowersProductsCategories from './GrowersProductsCategories';
import { NavigationStackScreenProps } from 'react-navigation-stack';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import GrowersConfig from '@interfaces/Growers';

export declare interface RenderFixedHeaderProps {
    navigation: NavigationStackScreenProps;
}
export const renderFixedHeader: FunctionComponent<any> = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={{ top: 40, left: 10, height: 700, position: 'absolute' }}
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

export declare interface NavBarProductsHeaderProps {
    data: any;
    scrollMainList: any;
    currentIndex: number;
    setBlockUpdateIndex: any;
    setCurrentIndex: any;
    grower: GrowersConfig;
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
            <View style={styles.backgroundContainer}>
                <View style={styles.statusBar} />
                <View style={styles.navBar}>
                    <Text style={styles.navBarGrowerName}>{grower.name}</Text>
                    <TouchableOpacity style={styles.iconsContainer}>
                        <Feather
                            style={styles.shareIcon}
                            name="share"
                            size={24}
                            color="white"
                        />
                        <Ionicons
                            style={styles.infoIcon}
                            name="ios-information-circle-outline"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.categoriesBackgroundContainer}>
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
                                    { borderBottomWidth: isActive ? 1.5 : 0 }
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.tabText,
                                        {
                                            color: isActive
                                                ? '#090909'
                                                : '#9e9e9e'
                                        }
                                    ]}
                                >
                                    {title}
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
            </View>
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
