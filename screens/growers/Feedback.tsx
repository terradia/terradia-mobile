import React, { FunctionComponent, ReactElement } from 'react';
import { View } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import Header from '@components/product/header';
import FeedbackContent from '@components/product/feedback';

const Feedback: FunctionComponent = () => {
    const product = useNavigationParam('product');
    return (
        <View style={{ flex: 1 }}>
            <Header title={product.name} />

            <FeedbackContent product={product} />
        </View>
    );
};
// @ts-ignore
Feedback.navigationOptions = {
    headerMode: 'none',
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default Feedback;
