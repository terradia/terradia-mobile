import React, { FunctionComponent } from "react";
import { useNavigationParam } from "react-navigation-hooks";
import PastReviewHeader from "@components/orders/pastReview/PastReviewHeader";
import UpcomingReviewContent from "@components/orders/upcomingReview/UpcomingReviewContent";

const PastOrderReview: FunctionComponent = () => {
    const order = useNavigationParam("order");
    return (
        <>
            <PastReviewHeader order={order} />
            <UpcomingReviewContent order={order} />
        </>
    );
};

export default PastOrderReview;
