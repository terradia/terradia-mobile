import React, { FunctionComponent, ReactElement } from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Product } from '@interfaces/Companies';
import Description from './Description';
import { AirbnbRating } from 'react-native-ratings';
import FeedbackItem from './FeedbackItem';
import { useQuery } from '@apollo/react-hooks';
import getProductReviews from '../../../graphql/getProductReviews.graphql';
import { useNavigation } from 'react-navigation-hooks';
import FeedBackLoader from './FeedBackLoader';

declare interface FeedbackProps {
    product: Product;
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10
    },
    feedbackContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    feedbackText: {
        fontFamily: 'MontserratBold',
        fontSize: 25,
        color: '#575757'
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nbVotes: {
        fontFamily: 'MontserratSemiBold',
        color: '#7D7D7D',
        fontSize: 16
    },
    textSeeAll: {
        alignSelf: 'flex-end',
        color: '#4AA542',
        fontFamily: 'MontserratBold'
    }
});

const Feedback: FunctionComponent<FeedbackProps> = ({ product }) => {
    const { navigate } = useNavigation();
    const { data: reviews } = useQuery(getProductReviews, {
        variables: { id: product.id, limit: 10, offset: 0 }
    });
    const _renderHeader = (): ReactElement => {
        return (
            <View style={styles.container}>
                <Description product={product} />
                <View style={styles.feedbackContainer}>
                    <Text style={styles.feedbackText}>AVIS</Text>
                    <View>
                        <TouchableOpacity
                            onPress={(): boolean =>
                                navigate('Feedback', { product: product })
                            }
                        >
                            <Text style={styles.textSeeAll}>Voir tout</Text>
                        </TouchableOpacity>
                        <View style={styles.starsContainer}>
                            <AirbnbRating
                                selectedColor={'#7D7D7D'}
                                defaultRating={1}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                            />
                            <Text style={styles.nbVotes}>
                                ({product.numberOfMarks})
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    if (!reviews) return <FeedBackLoader />;
    return (
        <FlatList
            data={reviews.getProductReviews.slice(0, 10)}
            ListHeaderComponent={_renderHeader}
            renderItem={({ item }): ReactElement => (
                <FeedbackItem review={item} />
            )}
            keyExtractor={item => item.id}
            initialNumToRender={2}
        />
    );
};

export default Feedback;
