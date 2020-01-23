import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '@components/profile/header';
import PremiumCard from '@components/profile/card/PremiumCard';
import MenuCard from '@components/profile/card/MenuCards';
import Cart from '@components/cart';
import { SwipeListView } from 'react-native-swipe-list-view';

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
    }
];
const ProfileScreen: FunctionComponent<any> = () => {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    return (
        <View style={{flex: 1}}>
            <Header />
            <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>
                <PremiumCard />
                <MenuCard />
            </View>
            <SwipeListView
                style={{flex: 1}}
                useFlatList={true}
                data={DATA}
                renderItem={ (rowData, rowMap) => (
                    <View>
                        <Text>I am {rowData.item.name} in a SwipeListView</Text>
                    </View>
                )}
                renderHiddenItem={ (rowData, rowMap) => (
                    <View >
                        <TouchableOpacity onPress={ () => rowMap[rowData.item.key].closeRow() }>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={75}
                rightOpenValue={-150}
                onRowOpen={(rowKey, rowMap) => {
                    setTimeout(() => {
                        rowMap[rowKey].closeRow()
                    }, 2000)
                }}
            />
            <Cart />
        </View>
    );
};

export default ProfileScreen;
