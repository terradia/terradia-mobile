import React, { ReactElement } from "react";
import PastReviewHeader from "@components/orders/pastReview/PastReviewHeader";
import PastReviewContent from "@components/orders/pastReview/PastReviewContent";
import { StackScreenProps } from "@react-navigation/stack";
import { OrderHistoryData } from "@interfaces/Orders";

type RootStackParamList = {
    Home: undefined;
    PastOrderReview: { order: OrderHistoryData };
};
type Props = StackScreenProps<RootStackParamList, "PastOrderReview">;

const PastOrderReview = ({ route }: Props): ReactElement => {
    const { order } = route.params;
    return (
        <>
            <PastReviewHeader order={order} />
            <PastReviewContent order={order} />
        </>
    );
};

export default PastOrderReview;
