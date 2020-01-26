import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Cart from '@components/cart';
import Spinner from 'react-native-loading-spinner-overlay';

const Loading: FunctionComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Spinner visible={true} textContent={'Loading...'} textStyle={{}} />
            <View style={{ paddingBottom: 10, backgroundColor: '#5CC04A' }}>
                <Cart />
            </View>
        </View>
    );
};

export default Loading;
