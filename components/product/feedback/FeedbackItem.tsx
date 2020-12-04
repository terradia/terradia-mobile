import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { Review } from "@interfaces/Companies";
import {
    ThemedBox,
    ThemedContainer,
    ThemedText
} from "@components/theme/Theme";

declare interface FeedbackItemProductProps {
    review: Review;
}

const styles = StyleSheet.create({
    container: {
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontFamily: "MontserratBold"
    },
    subText: {
        fontFamily: "MontserratSemiBold"
    },
    comment: {
        fontFamily: "MontserratMedium",
        marginTop: 10
    }
});

const FeedbackItem: FunctionComponent<FeedbackItemProductProps> = ({
    review
}) => {
    return (
        <ThemedContainer style={styles.container}>
            <View style={styles.header}>
                <ThemedText style={styles.title}>
                    {review.title.length < 25
                        ? `${review.title}`
                        : `${review.title.substring(0, 23)}...`}
                </ThemedText>
                <AirbnbRating
                    selectedColor={"#FADB14"}
                    defaultRating={review.customerMark}
                    size={18}
                    showRating={false}
                    isDisabled={true}
                />
            </View>
            <View style={styles.header}>
                <ThemedText style={styles.subText}>24 Jan</ThemedText>
                <ThemedText style={styles.subText}>
                    {review.customer.user.firstName.charAt(0).toUpperCase() +
                        review.customer.user.firstName.slice(1) +
                        " " +
                        review.customer.user.lastName[0].toUpperCase() +
                        "."}
                </ThemedText>
            </View>
            <ThemedText style={styles.comment}>{review.description}</ThemedText>
        </ThemedContainer>
    );
};

export default FeedbackItem;
