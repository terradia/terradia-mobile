import React, { FunctionComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import Header from '@components/product/header';
import { useQuery } from '@apollo/react-hooks';
import getProduct from '../../graphql/getProduct.graphql';
import getProductReviews from '../../graphql/getProductReviews.graphql';
import { useNavigationParam } from 'react-navigation-hooks';
import Content from '@components/product/content';

const ProductScreen: FunctionComponent = () => {
    const productId = useNavigationParam('product');
    const { data: product, loading } = useQuery(getProduct, {
        variables: { id: productId }
    });
    const { data: reviews } = useQuery(getProductReviews, {
        variables: { id: productId, limit: 10, offset: 0 }
    });
    if (!product) {
        return <Content product={null} />;
    }
    // return <Content product={null} />;
    return <Content product={product.getProduct} />;
};

// @ts-ignore
ProductScreen.navigationOptions = {
    headerMode: 'none',
    header: (): ReactElement => null,
    tabBarVisible: false
};

export default ProductScreen;