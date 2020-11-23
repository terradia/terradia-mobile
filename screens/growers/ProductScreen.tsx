import React, { FunctionComponent, ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import getProduct from "../../graphql/product/getProduct.graphql";
import getProductReviews from "../../graphql/getProductReviews.graphql";
import Content from "@components/product/content";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
    Home: undefined;
    ProductScreen: { product: string };
};
type Props = StackScreenProps<RootStackParamList, "ProductScreen">;

const ProductScreen = ({ route }: Props): ReactElement => {
    console.log(route);
    const { product: productId } = route.params;
    const { data, loading } = useQuery(getProduct, {
        variables: { id: productId }
    });
    const { data: reviews } = useQuery(getProductReviews, {
        variables: { id: productId, limit: 10, offset: 0 }
    });
    console.log(data);
    if (!data) {
        return <Content product={null} />;
    }
    // return <Content product={null} />;
    return <Content product={data.getProduct} />;
};

export default ProductScreen;
