import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Header from '../header';
import { Product } from '@interfaces/Companies';
import ContentHeader from './Header';
import Feedback from './Feedback';
import Footer from './Footer';
import ProductLoader from './ProductLoader';

declare interface ContentProductProps {
    product: Product;
}

const index: FunctionComponent<ContentProductProps> = ({ product }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {product ? (
                <>
                    <View style={{ flex: 1 }}>
                        <Header title={product.name} />
                        <ContentHeader product={product} />
                        <Feedback product={product} />
                    </View>
                    <Footer product={product} />
                </>
            ) : (
                <>
                    <Header title={''} />
                    <ProductLoader />
                </>
            )}
        </View>
    );
};

export default index;
