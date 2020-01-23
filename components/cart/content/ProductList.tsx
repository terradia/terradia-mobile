import React, { FunctionComponent, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Animated
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppleStyleSwipeableRow from './AppleStyleSwipealeRow';

const DATA = [
    {
        name: 'barquette de fraise',
        quantity: 1,
        price: 18
    },
    {
        name: 'concombre',
        quantity: 3,
        price: 6.45
    },
    {
        name: 'concombre',
        quantity: 3,
        price: 6.45
    },
    {
        name: 'concombre',
        quantity: 3,
        price: 6.45
    }
];

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        color: '#575757',
        marginBottom: 30
    },
    itemGreen: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
        color: '#8FDD3D'
    },
    bottomItemDivider: {
        height: 1,
        width: '100%',
        backgroundColor: '#C7C7CC'
    },
    total: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        color: '#575757'
    },
    totalPrice: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        color: '#8FDD3D',
        marginLeft: 10
    },
    priceContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 30
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10
    }
});

const ProductList: FunctionComponent = () => {
    const [currentOpen, setCurrentOpen] = useState(-1);
    const refSwipeableRows = useRef([]);

    const openNewSwiper = id => {
        console.log('Hello');
        console.log(currentOpen);
        if (currentOpen !== -1) {
            refSwipeableRows.current[currentOpen].getAlert();
            console.log('Close');
        }
        setCurrentOpen(id);
    };

    const _renderItem = ({ item, index }) => {
        return (
            <AppleStyleSwipeableRow
                id={index}
                setCurrentOpen={openNewSwiper}
                close={() => console.log('Close')}
                ref={refSwipeableRows[0]}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        paddingTop: 10
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.itemGreen}>{item.quantity}</Text>
                        <Text style={{ marginLeft: 5 }}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.itemGreen}>{item.price}</Text>
                    </View>
                </View>
                <View style={styles.bottomItemDivider} />
            </AppleStyleSwipeableRow>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Votre commande</Text>
            <FlatList
                data={DATA}
                renderItem={_renderItem}
                keyExtractor={(item, index) => `message ${index}`}
            />
            <View style={styles.priceContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>36 $</Text>
            </View>
        </View>
    );
};

export default ProductList;
