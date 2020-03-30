import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useState
} from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import getProductReviews from '../../../graphql/getProductReviews.graphql';
import { Product, Review } from '@interfaces/Companies';
import FeedbackItem from '@components/product/feedback/FeedbackItem';

declare interface FeedbackProductProps {
    product: Product;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: '#575757',
        fontFamily: 'MontserratBold',
        marginBottom: 20,
        marginLeft: 15,
        fontSize: 18
    }
});

const index: FunctionComponent<FeedbackProductProps> = ({ product }) => {
    const [offset, setOffset] = useState(10);
    const { data: reviews, fetchMore, loading } = useQuery(getProductReviews, {
        variables: { id: product.id, limit: 10, offset: 0 },
        notifyOnNetworkStatusChange: true
    });

    const _listHeader = () => (
        <View>
            <Text style={styles.title}>
                Évaluations ({product.numberOfMarks})
            </Text>
        </View>
    );
    if (!reviews || !reviews.getProductReviews) {
        return <View />;
    }

    const fetchMoreCall = (): void => {
        fetchMore({
            variables: { id: product.id, limit: 10, offset: offset },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (
                    !fetchMoreResult ||
                    fetchMoreResult.getProductReviews.length === 0
                ) {
                    return previousResult;
                }

                return {
                    // Concatenate the new feed results after the old ones
                    getProductReviews: previousResult.getProductReviews.concat(
                        fetchMoreResult.getProductReviews
                    )
                };
            }
        }).then();
        setOffset(offset + 10);
    };

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={_listHeader}
                onEndReachedThreshold={0}
                keyExtractor={item => item.id.toString()}
                onEndReached={(): void => fetchMoreCall()}
                data={reviews.getProductReviews}
                renderItem={(comment): ReactElement => (
                    <FeedbackItem review={comment.item} />
                )}
            />
        </View>
    );
};

export default index;
