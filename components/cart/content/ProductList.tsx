import React, { FunctionComponent, ReactElement, useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AppleStyleSwipeableRow from './AppleStyleSwipealeRow';
import styles from './styles/ProductList.style';

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

const ProductList: FunctionComponent = () => {
    const [currentOpen, setCurrentOpen] = useState(-1);
    const elRef = useRef([]);

    const openNewSwiper = id => {
        if (currentOpen !== -1) {
            elRef.current[currentOpen].close();
        }
        setCurrentOpen(id);
    };
    const _renderItem = ({ item, index }): ReactElement => {
        return (
            <AppleStyleSwipeableRow
                id={index}
                setCurrentOpen={openNewSwiper}
                close={(): void => console.log('Close')}
                ref={ins => (elRef.current[index] = ins)}
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
                        <Text style={{ marginLeft: 10 }}>{item.name}</Text>
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
                extraData={[currentOpen, elRef]}
                renderItem={_renderItem}
                keyExtractor={(item, index): string => `message ${index}`}
            />
            <View style={styles.priceContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>36 $</Text>
            </View>
        </View>
    );
};

export default ProductList;
