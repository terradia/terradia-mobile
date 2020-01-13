import React, {useEffect, useRef, useState} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    SectionList, View, PixelRatio
} from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import GrowersProductsForegroundHeader from '../../components/growers/products/GrowersProductsForegroundHeader'
import {renderFixedHeader, renderImageBackground, renderNavBar} from '../../components/growers/products/GrowersProductsHeader';
import GrowersProductsCategories from "../../components/growers/products/GrowersProductsCategories";
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

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
    {
        title: 'Boissons',
        data: ['bière', 'vodka', 'rhum'],
    },
    {
        title: 'Glace1',
        data: ['Vanille double boule', 'Chocolat une boule', 'Fraise'],
    },
    {
        title: 'Boissons2',
        data: ['bière', 'vodka', 'rhum'],
    },
];

const GrowerProductsScreen = (props: GrowersProductsScreen) => {
    const list = useRef(null);
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 1)
    }, []);

    const renderItem = ({item}) => {
        return (
            <Text key={item} style={{height: 50}}> {item} </Text>
        )
    };

    const scrollMainList = (sectionIndex: Number) => {
        list.current.scrollToLocation({itemIndex: 1, sectionIndex: sectionIndex, viewOffset: -120})
    };

    if (display) {
        return (
            <SectionList
                style={styles.containerBox}
                sections={ DATA }
                ref={list}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 340 }}
                showsHorizontalScrollIndicator={false}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{height: 50}}>
                        <Text>
                            {title}
                        </Text>
                    </View>)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => list.current.scrollToLocation({itemIndex: 0, sectionIndex: 4, viewOffset: 1400})}  style={{overflow: 'hidden',
                        paddingHorizontal: 10,
                        height: 30,
                        flex: 1,
                        width: '100%',
                        backgroundColor: 'white',
                        borderColor: '#ccc',
                        borderBottomWidth: 1,
                        justifyContent: 'center'} }>
                        <Text style={ {} }>
                            { item }
                        </Text>
                    </TouchableOpacity>
                )}
                    renderScrollComponent={() => (
                        <ParallaxScrollView
                            style={{flex: 1, width: '100%'}}
                            backgroundColor="white"
                            parallaxHeaderHeight={300}
                            stickyHeaderHeight={130}
                            outputScaleValue={20}
                            backgroundScrollSpeed={20}
                            renderFixedHeader={() => (renderFixedHeader(props.navigation))}
                            renderBackground={() => (renderImageBackground())}
                            renderStickyHeader={() => (renderNavBar(DATA, scrollMainList))}
                            fadeOutForeground={false}
                            showsVerticalScrollIndicator={false}
                            renderForeground={GrowersProductsForegroundHeader}>
                        </ParallaxScrollView>)} />
        )
    }
    if (!display) {
        return (
                <SectionList
                    style={styles.containerBox}
                    sections={DATA}
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
});
export default GrowerProductsScreen;