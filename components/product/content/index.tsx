import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Header from '../header';
import { ProductData } from '@interfaces/Companies';
import ContentHeader from './Header';
import Feedback from './Feedback';
import Footer from './Footer';
import ProductLoader from './ProductLoader';
import { ThemedBox, ThemedContainer } from '@components/theme/Theme';

declare interface ContentProductProps {
    product: ProductData;
}

const index: FunctionComponent<ContentProductProps> = ({ product }) => {
    return (
        <ThemedContainer style={{ flex: 1 }}>
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
        </ThemedContainer>
    );
};

export default index;
