import React, { FunctionComponent, ReactElement } from "react";
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { ProductData } from "@interfaces/Companies";
import Description from "./Description";
import { AirbnbRating } from "react-native-ratings";
import FeedbackItem from "./FeedbackItem";
import { useQuery } from "@apollo/react-hooks";
import getProductReviews from "../../../graphql/getProductReviews.graphql";
import { useNavigation } from "@react-navigation/native";
import FeedBackLoader from "./FeedBackLoader";
import { ThemedText } from '@components/theme/Theme';

declare interface FeedbackProps {
    product: ProductData;
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10
    },
    feedbackContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    feedbackText: {
        fontFamily: "MontserratBold",
        fontSize: 25,
        color: "#575757"
    },
    starsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    nbVotes: {
        fontFamily: "MontserratSemiBold",
        fontSize: 16
    },
    textSeeAll: {
        alignSelf: "flex-end",
        color: "#4AA542",
        fontFamily: "MontserratBold"
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
                    <ThemedText style={styles.feedbackText}>AVIS</ThemedText>
                    <View>
                        <TouchableOpacity
                            onPress={(): void =>
                                navigate("Feedback", { product })
                            }
                        >
                            <ThemedText style={styles.textSeeAll}>Voir tout</ThemedText>
                        </TouchableOpacity>
                        <View style={styles.starsContainer}>
                            <AirbnbRating
                                selectedColor={"#FADB14"}
                                defaultRating={1}
                                size={18}
                                showRating={false}
                                isDisabled={true}
                            />
                            <ThemedText style={styles.nbVotes}>
                                ({product.numberOfMarks})
                            </ThemedText>
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
