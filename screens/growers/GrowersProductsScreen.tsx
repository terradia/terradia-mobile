import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import {Feather, FontAwesome, Ionicons} from '@expo/vector-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import GrowersProductsHeader from '../../components/growers/products/GrowersProductsHeader'
import GrowersProductsContent from '../../components/growers/products/GrowersProductsContent';
import GrowersProductsCategories from '../../components/growers/products/GrowersProductsCategories';


export declare interface GrowersProductsScreen {
    navigation?: any;
}

const GrowerProductsScreen = (props: GrowersProductsScreen) => {
    const renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={{backgroundColor: '#5CC04A'}}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
                {/*<TouchableOpacity onPress={() => {props.navigation.goBack()}}>*/}
                {/*    <FontAwesome style={{margin: 3}} name="arrow-left" size={24} color="white" />*/}
                {/*</TouchableOpacity>*/}
                <View/>
                <Text style={{color: 'white', fontSize: 20}}>
                    Au brasseur Strasbourg
                </Text>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Feather style={{margin: 3, marginRight: 5}} name="share" size={24} color="white" />
                    <Ionicons style={{margin: 3}} name="ios-information-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
            </View>
            <View style={{backgroundColor: 'white'}}>
                <GrowersProductsCategories/>
            </View>
        </View>
    );

    const renderImageBackground = () => {
        return (
            <View>
                <Image source={{ uri: `https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg`, width: window.width, height: 250 }}/>
                <View style={styles.brightness}/>
            </View>
        )
    };

    const renderFixedHeader = () => {
        return (
            <TouchableOpacity style={{top: 40,left: 10, height: 700, position: 'absolute'}} onPress={() => {props.navigation.goBack()}}>
                <FontAwesome style={{margin: 3}} name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
        )
    };

    return (
        <ParallaxScrollView
            style={{ backgroundColor: 'hotpink', overflow: 'hidden' }}
            backgroundColor="white"
            parallaxHeaderHeight={300}
            stickyHeaderHeight={130}
            renderFixedHeader={renderFixedHeader}
            renderBackground={renderImageBackground}
            renderStickyHeader={renderNavBar}
            fadeOutForeground={false}
            renderForeground={GrowersProductsHeader}>
            <GrowersProductsContent/>
        </ParallaxScrollView>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
    navContainer: {
        height: 200,
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
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
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
});
export default GrowerProductsScreen;