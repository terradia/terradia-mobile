import React, { FunctionComponent } from "react";
import { useNavigationParam } from "react-navigation-hooks";
import PastReviewHeader from "@components/orders/pastReview/PastReviewHeader";
import PastReviewContent from "@components/orders/pastReview/PastReviewContent";

const PastOrderReview: FunctionComponent = () => {
    const order = useNavigationParam("order");
    return (
        <>
            <PastReviewHeader order={order} />
            <PastReviewContent order={order} />
        </>
    );
};

export default PastOrderReview;
