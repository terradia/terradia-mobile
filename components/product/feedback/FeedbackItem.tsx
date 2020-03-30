import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Review } from '@interfaces/Companies';

declare interface FeedbackItemProductProps {
    review: Review;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e4e4e4',
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#575757',
        fontFamily: 'MontserratBold'
    },
    subText: {
        color: '#8E8E93',
        fontFamily: 'MontserratSemiBold'
    },
    comment: {
        color: '#7D7D7D',
        fontFamily: 'MontserratMedium',
        marginTop: 10
    }
});

const FeedbackItem: FunctionComponent<FeedbackItemProductProps> = ({
    review
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {review.title.length < 25
                        ? `${review.title}`
                        : `${review.title.substring(0, 23)}...`}
                </Text>
                <AirbnbRating
                    selectedColor={'#4AA542'}
                    defaultRating={review.customerMark}
                    size={18}
                    showRating={false}
                    isDisabled={true}
                />
            </View>
            <View style={styles.header}>
                <Text style={styles.subText}>24 Jan</Text>
                <Text style={styles.subText}>
                    {review.customer.user.firstName.charAt(0).toUpperCase() +
                        review.customer.user.firstName.slice(1) +
                        ' ' +
                        review.customer.user.lastName[0].toUpperCase() +
                        '.'}
                </Text>
            </View>
            <Text style={styles.comment}>{review.description}</Text>
        </View>
    );
};

export default FeedbackItem;
