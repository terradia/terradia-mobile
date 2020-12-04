import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { Review } from "@interfaces/Companies";
import { AirbnbRating } from "react-native-ratings";
import { ThemedText } from "@components/theme/Theme";

declare interface FeedbackProps {
    review: Review;
}
const FeedbackItem: FunctionComponent<FeedbackProps> = ({ review }) => {
    return (
        <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row"
                }}
            >
                <ThemedText
                    style={{
                        fontFamily: "MontserratBold",
                        fontSize: 14
                    }}
                >
                    <ThemedText numberOfLines={1}>
                        {review.title.length < 30
                            ? `${review.title}`
                            : `${review.title.substring(0, 28)}...`}
                    </ThemedText>
                </ThemedText>
                <ThemedText
                    style={{
                        fontFamily: "MontserratBold",
                        fontSize: 14
                    }}
                >
                    {review.customer.user.firstName.charAt(0).toUpperCase() +
                        review.customer.user.firstName.slice(1) +
                        " " +
                        review.customer.user.lastName[0].toUpperCase() +
                        "."}
                </ThemedText>
            </View>
            <View style={{ alignSelf: "flex-start" }}>
                <AirbnbRating
                    selectedColor={"#FADB14"}
                    defaultRating={1}
                    size={15}
                    showRating={false}
                    isDisabled={true}
                />
            </View>
            <View>
                <ThemedText>{review.description}</ThemedText>
            </View>
        </View>
    );
};

export default FeedbackItem;
