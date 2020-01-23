import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useRef,
    useState
} from 'react';
import { Text, TouchableOpacity, SectionList, View } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import GrowersProductsForegroundHeader from '@components/growers/products/GrowersProductsForegroundHeader';
import {
    renderFixedHeader,
    renderImageBackground,
    renderNavBar
} from '@components/growers/products/GrowersProductsHeader';
import {
    renderHeaders,
    renderItems
} from '@components/growers/products/GrowersProductsListRender';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import styles from './styles/GrowerProductsScreen.style';
import { useNavigationParam } from 'react-navigation-hooks';
import Cart from '@components/cart';

const HEADER_SIZE = 170;
const LIST_HEADER_HEIGHT = 40;
const LIST_ELEM_HEIGHT = 135;

declare interface GrowersProductsScreen {
    navigation?: NavigationStackScreenProps;
}

const GrowerProductsScreen: FunctionComponent<GrowersProductsScreen> = ({
    navigation
}) => {
    const list = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [display, setDisplay] = useState(false);
    const [positionArray, setPositionArray] = useState([]);
    const [blockUpdateIndex, setBlockUpdateIndex] = useState(false);
    const grower = useNavigationParam('grower');

    const getArrayGoodName = (): any => {
        return grower.productsCategories.map(function(obj) {
            Object.defineProperty(
                obj,
                'title',
                Object.getOwnPropertyDescriptor(obj, 'name')
            );

            Object.defineProperty(
                obj,
                'data',
                Object.getOwnPropertyDescriptor(obj, 'products')
            );
            return obj;
        });
    };
    const [products, setProducts] = useState(getArrayGoodName());
    /**
     * Create an array of positions
     * Each element of this array is the position of each section
     * First position is Header Size + Section size
     */
    const fillArrayPositions = (): void => {
        const arr = [HEADER_SIZE];
        products.forEach((item, index) => {
            arr.push(
                item.data.length * LIST_ELEM_HEIGHT +
                    LIST_HEADER_HEIGHT +
                    arr[index]
            );
        });
        setPositionArray(arr);
    };

    useEffect(() => {
        fillArrayPositions();
        setTimeout(() => {
            setDisplay(true);
        }, 1);
    }, []);

    const renderItem = ({ item }): any => {
        return <Text style={{ height: 50 }}> abcd </Text>;
    };

    /**
     * Scroll to index
     * ViewsOffset => Header size
     * ViewPosition => On the header name (- is above + is over)
     * @param sectionIndex
     */
    const scrollMainList = (sectionIndex: number): void => {
        list.current.scrollToLocation({
            itemIndex: 1,
            sectionIndex: sectionIndex,
            viewOffset: -120,
            viewPosition: -0.02
        });
    };

    /**
     * Use array of position and use the current offset to get the current section position
     * If offset < Header thats mean first section (header + first section)
     * @param offsetY
     */
    const getCurrentSectionInList = (offsetY: number): void => {
        let itemIdx = 0;
        if (offsetY > HEADER_SIZE) {
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

    const handleScroll = (event: any): void => {
        if (blockUpdateIndex) return;
        getCurrentSectionInList(event.nativeEvent.contentOffset.y);
    };

    if (display) {
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    style={styles.containerBox}
                    sections={products}
                    ref={list}
                    keyExtractor={(item): string => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: 340 }}
                    showsHorizontalScrollIndicator={false}
                    renderSectionHeader={({ section: { title } }): any => {
                        return (
                            <View style={{ height: LIST_HEADER_HEIGHT }}>
                                {renderHeaders(title)}
                            </View>
                        );
                    }}
                    renderItem={({ item }): any => (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                height: LIST_ELEM_HEIGHT,
                                borderColor: '#ccc',
                                borderTopWidth: 0.5
                            }}
                        >
                            {renderItems({ product: item })}
                        </TouchableOpacity>
                    )}
                    renderScrollComponent={(): any => (
                        <ParallaxScrollView
                            onScroll={(event): any => handleScroll(event)}
                            style={{ flex: 1, width: '100%' }}
                            backgroundColor="white"
                            parallaxHeaderHeight={300}
                            stickyHeaderHeight={133}
                            renderFixedHeader={(): any =>
                                renderFixedHeader({ navigation })
                            }
                            renderBackground={renderImageBackground}
                            renderStickyHeader={(): any =>
                                renderNavBar({
                                    data: products,
                                    scrollMainList,
                                    currentIndex: currentIndex - 1,
                                    setBlockUpdateIndex,
                                    setCurrentIndex,
                                    grower
                                })
                            }
                            fadeOutForeground={false}
                            showsVerticalScrollIndicator={false}
                            onMomentumScrollEnd={(): any =>
                                setBlockUpdateIndex(false)
                            }
                            renderForeground={(): any =>
                                GrowersProductsForegroundHeader({ grower })
                            }
                        />
                    )}
                />
                <View style={{ paddingBottom: 10, backgroundColor: '#5CC04A' }}>
                    <Cart />
                </View>
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    style={styles.containerBox}
                    sections={products}
                    initialNumToRender={1}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item): string => item.id.toString()}
                    renderItem={renderItem}
                />
                <View style={{ paddingBottom: 10, backgroundColor: '#5CC04A' }}>
                    <Cart />
                </View>
            </View>
        );
    }
};

// @ts-ignore
GrowerProductsScreen.navigationOptions = {
    headerMode: 'none',
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default GrowerProductsScreen;
