import React, {useEffect, useRef, useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    SectionList,
    View
} from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import GrowersProductsForegroundHeader from '../../components/growers/products/GrowersProductsForegroundHeader'
import {renderFixedHeader, renderImageBackground, renderNavBar} from '../../components/growers/products/GrowersProductsHeader';


const HEADER_SIZE = 170;
const LIST_HEADER_HEIGHT = 100;
const LIST_ELEM_HEIGHT = 50;

export declare interface GrowersProductsScreen {
    navigation?: any;
}

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [display, setDisplay] = useState(false);
    const [positionArray, setPositionArray] = useState([]);
    const [blockUpdateIndex, setBlockUpdateIndex] = useState(false);

    const fillArrayPositions = () =>{
        let arr = [HEADER_SIZE];
        DATA.forEach((item, index) => {
            arr.push((item.data.length * LIST_ELEM_HEIGHT) + LIST_HEADER_HEIGHT + arr[index] - 10);
        });
        setPositionArray(arr);
    };

    useEffect(() => {
        fillArrayPositions();
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

    const getCurrentSectionInList = (offsetY) => {
        let itemIdx = 0;
        if (offsetY > HEADER_SIZE)  {
            for (let i = 0; i < positionArray.length; i++) {
                if (offsetY <= positionArray[i]) {
                    itemIdx = i;
                    break;
                }
            }
        }
        itemIdx = itemIdx === 0 ? 1 : itemIdx;
        if (itemIdx !== currentIndex) {
            setCurrentIndex(itemIdx);
        }
    };

    const handleScroll = (event) => {
        if (blockUpdateIndex) return;
        getCurrentSectionInList(event.nativeEvent.contentOffset.y)
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
                    <View style={{height: LIST_HEADER_HEIGHT}}>
                        <Text>
                            {title}
                        </Text>
                    </View>)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{overflow: 'hidden',
                        paddingHorizontal: 10,
                        height: LIST_ELEM_HEIGHT,
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
                        onScroll={(event) => handleScroll(event)}
                        style={{flex: 1, width: '100%'}}
                        backgroundColor="white"
                        parallaxHeaderHeight={300}
                        stickyHeaderHeight={130}
                        renderFixedHeader={() => (renderFixedHeader(props.navigation))}
                        renderBackground={() => (renderImageBackground())}
                        renderStickyHeader={() => (renderNavBar(DATA, scrollMainList, currentIndex - 1, setBlockUpdateIndex, setCurrentIndex))}
                        fadeOutForeground={false}
                        showsVerticalScrollIndicator={false}
                        onMomentumScrollEnd={() => setBlockUpdateIndex(false)}
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