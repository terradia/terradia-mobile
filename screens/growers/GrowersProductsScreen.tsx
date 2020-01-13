import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    SectionList, FlatList, ListView, ScrollView
} from "react-native";
import {Feather, FontAwesome, Ionicons} from '@expo/vector-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import GrowersProductsForegroundHeader from '../../components/growers/products/GrowersProductsForegroundHeader'
import GrowersProductsCategories from '../../components/growers/products/GrowersProductsCategories';


export declare interface GrowersProductsScreen {
    navigation?: any;
}

const LIST = [
    'Simplicity Matters',
    'Hammock Driven Development',
    'Value of Values',
    'Are We There Yet?',
    'The Language of the System',
    'Design, Composition, and Performancrrrrrrre',
    'Clojure core.async',
    'The Functional Database',
    'Deconstructing the Database',
    'Hammock Driven Development',
    'Value of Values',
    'Simplicity Matters',
    'Hammock Driven Development',
    'Value of Values',
    'Are We There Yet?',
    'The Language of the System',
    'Design, Composition, and Performance',
    'Clojure core.async',
    'The Functional Database',
    'Deconstructing the Database',
    'Hammock Driven Development',
    'Value of Values'
];

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
    {
        title: 'Bière',
        data: ['Méga démon', '8.6', 'Maximator', 'Leffe'],
    },
    {
        title: 'Glace',
        data: ['Vanille double boule', 'Chocolat une boule', 'Fraise'],
    },
];

const GrowerProductsScreen = (props: GrowersProductsScreen) => {
    const list = useRef(null);
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 20)
    }, []);
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
                    <GrowersProductsCategories categories={DATA.map((item) => item.title)}/>
                </View>
            </View>
        </View>
    );

    const renderImageBackground = () => {
        return (
            <View>
                <Image source={{ uri: `https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg`, height: 250 }}/>
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

    const renderItem = ({item}) => {
        return (
            <Text key={item} style={{height: 50}}> {item} </Text>
        )
    };
    if (display) {
        return (
            <FlatList
                style={styles.containerBox}
                data={ LIST }
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View  style={ {overflow: 'hidden',
                        paddingHorizontal: 10,
                        height: 20,
                        flex: 1,
                        width: '100%',
                        backgroundColor: 'white',
                        borderColor: '#ccc',
                        borderBottomWidth: 1,
                        justifyContent: 'center'} }>
                        <Text style={ {} }>
                            { item }
                        </Text>
                    </View>
                )}
                    renderScrollComponent={props => (
                        <ParallaxScrollView
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
                        </ParallaxScrollView>)} />
        )
    }
    if (!display) {
        return (
                <FlatList
                    style={styles.containerBox}
                    data={LIST}
                    ref={list}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                />
        )
    }
};



const styles = StyleSheet.create({
    containerBox: {
        flex: 1,
        width: '100%'
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