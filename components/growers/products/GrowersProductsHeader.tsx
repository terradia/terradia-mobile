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


export declare interface GrowerProductsHeader {
    navigation?: any;
    data?: any;
}


const GrowerProductsHeader = forwardRef((props: GrowerProductsHeader, ref: any) => {
    const renderFixedHeader = () => {
        return (
            <TouchableOpacity style={{top: 40,left: 10, height: 700, position: 'absolute'}} onPress={() => {props.navigation.goBack()}}>
                <FontAwesome style={{margin: 3}} name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
        )
    };
    const renderImageBackground = () => {
        return (
            <View>
                <Image source={{ uri: `https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg`, height: 250 }}/>
                <View style={styles.brightness}/>
            </View>
        )
    };
    const renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={{backgroundColor: '#5CC04A'}}>
                <View style={styles.statusBar} />
                <View style={styles.navBar}><View/>
                    <Text style={{color: 'white', fontSize: 20}}>
                        Au brasseur Strasbourg
                    </Text>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Feather style={{margin: 3, marginRight: 5}} name="share" size={24} color="white" />
                        <Ionicons style={{margin: 3}} name="ios-information-circle-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor: '#5CC04A'}}>
                <View style={{backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                    <GrowersProductsCategories categories={props.data.map((item) => item.title)}/>
                </View>
            </View>
        </View>
    );
    return (
        <ParallaxScrollView
            ref={ref}
            style={{flex: 1, width: '100%'}}
            backgroundColor="white"
            parallaxHeaderHeight={300}
            stickyHeaderHeight={130}
            renderFixedHeader={renderFixedHeader}
            renderBackground={renderImageBackground}
            renderStickyHeader={renderNavBar}
            fadeOutForeground={false}
            showsVerticalScrollIndicator={false}
            renderForeground={GrowersProductsForegroundHeader}>
        </ParallaxScrollView>
    )
});

export default GrowerProductsHeader;

const styles = StyleSheet.create({
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