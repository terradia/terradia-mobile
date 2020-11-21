import React, { ReactElement } from 'react';
import UpcomingReviewHeader from "@components/orders/upcomingReview/UpcomingReviewHeader";
// import { useNavigationParam } from "react-navigation-hooks";
import UpcomingReviewContent from "@components/orders/upcomingReview/UpcomingReviewContent";
import { OrderData } from "@interfaces/Orders";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
    Home: undefined;
    UpcomingOrderReview: { order: OrderData };
};
type Props = StackScreenProps<RootStackParamList, "UpcomingOrderReview">;

const UpcomingOrderReview = ({ route }: Props): ReactElement => {
    const { order } = route.params;
    return (
        <>
            <UpcomingReviewHeader order={order} />
            <UpcomingReviewContent order={order} />
        </>
    );
};

export default UpcomingOrderReview;
