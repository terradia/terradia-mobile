import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { Reviews } from '@interfaces/Companies';
import { AirbnbRating } from 'react-native-ratings';
declare interface FeedbackProps {
    review: Reviews;
}
const FeedbackItem: FunctionComponent<FeedbackProps> = ({ review }) => {
    return (
        <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}
            >
                <Text
                    style={{
                        fontFamily: 'MontserratBold',
                        color: '#575757',
                        fontSize: 14
                    }}
                >
                    <Text numberOfLines={1}>
                        {review.title.length < 30
                            ? `${review.title}`
                            : `${review.title.substring(0, 28)}...`}
                    </Text>
                </Text>
                <Text
                    style={{
                        fontFamily: 'MontserratBold',
                        color: '#575757',
                        fontSize: 14
                    }}
                >
                    {review.customer.user.firstName +
                        ' ' +
                        review.customer.user.lastName[0] +
                        '.'}
                </Text>
            </View>
            <View style={{alignSelf: 'flex-start'}}>
                <AirbnbRating
                    selectedColor={'#575757'}
                    defaultRating={1}
                    size={15}
                    showRating={false}
                    isDisabled={true}
                />
            </View>
            <View>
                <Text>{review.description}</Text>
            </View>
        </View>
    );
};

export default FeedbackItem;
