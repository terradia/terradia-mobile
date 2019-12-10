import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from "react-native";
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {Feather, FontAwesome, Ionicons} from '@expo/vector-icons';

var SCREEN_HEIGHT = 812;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const images = {
    background: 'https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg', // Put your own image here
};

const GrowerProductsScreen = () => {
    const renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => {}}>
                    <FontAwesome style={{margin: 3}} name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Feather style={{margin: 3, marginRight: 5}} name="share" size={24} color="white" />
                    <Ionicons style={{margin: 3}} name="ios-information-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
    const _renderContent = () => {
        return (
            <View>
                <Text>Je suis ocntent</Text>
            </View>
        )
    };
    const renderHeader = () => {
        return (
            <View>

            </View>
        )
    };
    return (
        <ReactNativeParallaxHeader
            headerMinHeight={0}
            headerMaxHeight={200}
            extraScrollHeight={20}
            navbarColor="#3498db"
            title=""
            titleStyle={styles.titleStyle}
            backgroundImage={{uri:
                'http://www.aubrasseur.fr/wp-content/uploads/2014/04/20151104-282-1300x500.jpg'}}
            backgroundImageScale={1.1}
            renderNavBar={renderNavBar}
            renderContent={_renderContent}
            containerStyle={styles.container}
            contentContainerStyle={styles.contentContainer}
            innerContainerStyle={styles.container}
            scrollViewProps={{
                onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                onScrollEndDrag: () => console.log('onScrollEndDrag'),
            }}
        />
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
        marginHorizontal: 10,
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
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
export default GrowerProductsScreen;