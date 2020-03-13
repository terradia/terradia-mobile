import React, { FunctionComponent } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Product } from '@interfaces/Companies';
import Description from './Description';
import { AirbnbRating } from 'react-native-ratings';
import FeedbackItem from './FeedbackItem';

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
        color: '#4AA542',
        fontSize: 16
    }
});

const Feedback: FunctionComponent<FeedbackProps> = ({ product }) => {
    const _renderHeader = () => {
        return (
            <View style={styles.container}>
                <Description product={product} />
                <View style={styles.feedbackContainer}>
                    <Text style={styles.feedbackText}>AVIS</Text>
                    <View style={styles.starsContainer}>
                        <AirbnbRating
                            selectedColor={'#4AA542'}
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
        );
    };
    console.log(product.reviews);
    return (
        <FlatList
            data={product.reviews}
            ListHeaderComponent={_renderHeader}
            renderItem={({ item }) => <FeedbackItem review={item} />}
            keyExtractor={item => item.id}
        />
    );
};

export default Feedback;
