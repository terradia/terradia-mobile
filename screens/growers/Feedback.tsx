import React, { ReactElement } from "react";
import { View } from "react-native";
import Header from "@components/product/header";
import FeedbackContent from "@components/product/feedback";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductData } from "@interfaces/Companies";

type RootStackParamList = {
    Home: undefined;
    Feedback: { product: ProductData };
};
type Props = StackScreenProps<RootStackParamList, "Feedback">;

const Feedback = ({ route }: Props): ReactElement => {
    const { product } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <Header title={product.name} />

            <FeedbackContent product={product} />
        </View>
    );
};
// @ts-ignore
Feedback.navigationOptions = {
    headerMode: "none",
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default Feedback;
