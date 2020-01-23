import React, {
    createRef,
    FunctionComponent,
    useCallback,
    useRef,
    useState
} from 'react';
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

function useHookWithRefCallback() {
    const ref = useRef(null);
    const setRef = useCallback(node => {
        if (ref.current) {
            // Make sure to cleanup any events/references added to the last instance
        }

        if (node) {
            // Check if a node is actually passed. Otherwise node would be null.
            // You can now do what you need to, addEventListeners, measure, etc.
        }

        // Save a reference to the node
        ref.current = node;
    }, []);

    return [setRef];
}

const ProductList: FunctionComponent = () => {
    const [currentOpen, setCurrentOpen] = useState(-1);
    const elRef = useRef([]);

    const openNewSwiper = id => {
        if (currentOpen !== -1) {
            elRef.current[currentOpen].close();
        }
        setCurrentOpen(id);
    };
    const _renderItem = ({ item, index }) => {
        return (
            <AppleStyleSwipeableRow
                id={index}
                setCurrentOpen={openNewSwiper}
                close={() => console.log('Close')}
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
