import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import Header from '../header';
import { Product } from '@interfaces/Companies';
import ContentHeader from './Header';
import Feedback from './Feedback';
import Footer from './Footer';

declare interface ContentProductProps {
    product: Product;
}

const index: FunctionComponent<ContentProductProps> = ({ product }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header title={product.name} />
            <ContentHeader product={product} />
            <Feedback product={product} />
            <Footer product={product} />
        </View>
    );
};

export default index;
