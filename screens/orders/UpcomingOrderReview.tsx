import React, { FunctionComponent } from "react";
import UpcomingReviewHeader from "@components/orders/upcomingReview/UpcomingReviewHeader";
import { useNavigationParam } from "react-navigation-hooks";
import UpcomingReviewContent from "@components/orders/upcomingReview/UpcomingReviewContent";

const UpcomingOrderReview: FunctionComponent = () => {
    const order = useNavigationParam("order");
    return (
        <>
            <UpcomingReviewHeader order={order} />
            <UpcomingReviewContent order={order} />
        </>
    );
};

export default UpcomingOrderReview;
