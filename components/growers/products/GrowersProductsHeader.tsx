import React, {forwardRef} from 'react'
import {} from 'react-native';
import GrowersProductsForegroundHeader from "./GrowersProductsForegroundHeader";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {TouchableOpacity} from "react-native";
import {Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import {View} from "react-native";
import {Image} from "react-native";
import {Text} from "react-native";
import GrowersProductsCategories from "./GrowersProductsCategories";
import {StyleSheet} from "react-native";


export const renderFixedHeader = (navigation: any) => {
    return (
        <TouchableOpacity style={{top: 40,left: 10, height: 700, position: 'absolute'}} onPress={() => {navigation.goBack()}}>
            <FontAwesome style={{margin: 3}} name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
    )
};

export const renderNavBar = (data,scrollMainList) => {
    return (
        <View style={styles.navContainer}>
            <View style={styles.backgroundContainer}>
                <View style={styles.statusBar}/>
                <View style={styles.navBar}><View/>
                    <Text style={styles.navBarGrowerName}>
                        Au brasseur Strasbourg
                    </Text>
                    <TouchableOpacity style={styles.iconsContainer}>
                        <Feather style={styles.shareIcon} name="share" size={24} color="white"/>
                        <Ionicons style={styles.infoIcon} name="ios-information-circle-outline" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.categoriesBackgroundContainer}>
                <View style={styles.categoriesBackground}>
                    <GrowersProductsCategories categories={data.map((item) => item.title)} scrollMainList={scrollMainList}/>
                </View>
            </View>
        </View>
    )
};

export const renderImageBackground = () => {
    return (
        <View>
            <Image source={{ uri: `https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg`, height: 250 }}/>
            <View style={styles.brightness}/>
        </View>
    )
};

const styles = StyleSheet.create({
    categoriesBackgroundContainer: {
        backgroundColor: '#5CC04A'
    },
    categoriesBackground: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    backgroundContainer: {
        backgroundColor: '#5CC04A'
    },
    navBarGrowerName: {
        color: 'white',
        fontSize: 20
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    shareIcon: {
        margin: 3,
        marginRight: 5
    },
    infoIcon: {
        margin: 3
    },
    brightness: {
        flex: 1,
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        position: 'absolute',
        borderRadius: 10
    },
    navContainer: {
        height: 200
    },
    statusBar: {
        height: 30,
        backgroundColor: 'transparent',
    },
    navBar: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginHorizontal: 10,
    },
});