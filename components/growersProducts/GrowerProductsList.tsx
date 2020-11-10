import React, { FunctionComponent, useRef, useState } from "react";
import { TouchableOpacity, SectionList, View } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import GrowersProductsForegroundHeader from "@components/growersProducts/products/GrowersProductsForegroundHeader";
import {
    renderFixedHeader,
    renderImageBackground,
    renderNavBar
} from "@components/growersProducts/products/GrowersProductsHeader";
import {
    renderHeaders,
    renderItems
} from "@components/growersProducts/products/GrowersProductsListRender";
import { NavigationStackScreenProps } from "react-navigation-stack";
import styles from "./styles/GrowerProducts.style";
import Cart from "@components/cart";
import { CompanyData, ProductData } from "@interfaces/Companies";
import DeepLinking from "@components/routing/DeepLinking";

const HEADER_SIZE = 170;
const LIST_HEADER_HEIGHT = 40;
const LIST_ELEM_HEIGHT = 135;

declare interface GrowersProductsListProps {
    navigation?: NavigationStackScreenProps;
    products: any;
    company: CompanyData;
    positionArray: any;
}

const GrowerProductsList: FunctionComponent<GrowersProductsListProps> = ({
    navigation,
    products,
    company,
    positionArray
}) => {
    const list = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blockUpdateIndex, setBlockUpdateIndex] = useState(false);
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
            viewOffset: -HEADER_SIZE,
            viewPosition: 0
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

    return (
        <View style={{ flex: 1 }}>
            <SectionList
                initialNumToRender={2000}
                style={styles.containerBox}
                sections={products}
                ref={list}
                keyExtractor={(item): string => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 340 }}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={true}
                refreshing={true}
                renderSectionHeader={({ section: { title } }): any => {
                    return (
                        <View style={{ height: LIST_HEADER_HEIGHT }}>
                            {renderHeaders(title)}
                        </View>
                    );
                }}
                renderItem={({ item }: { item: ProductData }): any => (
                    <TouchableOpacity
                        onPress={(): void => {
                            navigation.navigate("Product", {
                                product: item.id
                            });
                        }}
                        activeOpacity={0.7}
                        style={{
                            height: LIST_ELEM_HEIGHT,
                            borderColor: "#ccc",
                            borderTopWidth: 0.5
                        }}
                    >
                        {renderItems({ product: item })}
                    </TouchableOpacity>
                )}
                renderScrollComponent={(): any => (
                    <ParallaxScrollView
                        onScroll={(event): any => handleScroll(event)}
                        onScrollEndDrag={(event): void => {
                            const y = event.nativeEvent.contentOffset.y;
                            if (y < 170) {
                                list.current.scrollToLocation({
                                    itemIndex: 1,
                                    sectionIndex: 0,
                                    viewOffset: y > 100 ? -HEADER_SIZE : 0,
                                    viewPosition: 0
                                });
                            }
                        }}
                        style={{ flex: 1, width: "100%" }}
                        backgroundColor="white"
                        parallaxHeaderHeight={300}
                        stickyHeaderHeight={133}
                        renderFixedHeader={(): any =>
                            renderFixedHeader({ navigation })
                        }
                        renderBackground={(): any =>
                            renderImageBackground({ grower: company })
                        }
                        renderStickyHeader={(): any =>
                            renderNavBar({
                                data: products,
                                scrollMainList,
                                currentIndex: currentIndex - 1,
                                setBlockUpdateIndex,
                                setCurrentIndex,
                                grower: company
                            })
                        }
                        fadeOutForeground={false}
                        showsVerticalScrollIndicator={false}
                        onMomentumScrollEnd={(): any =>
                            setBlockUpdateIndex(false)
                        }
                        renderForeground={(): any =>
                            GrowersProductsForegroundHeader({
                                grower: company
                            })
                        }
                    />
                )}
            />
            <View style={{ paddingBottom: 10, backgroundColor: "#5CC04A" }}>
                <Cart />
                <DeepLinking />
            </View>
        </View>
    );
};

export default GrowerProductsList;
