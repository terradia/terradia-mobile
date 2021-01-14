import React, { FunctionComponent, ReactElement } from "react";

import GrowerProducts from "@components/growersProducts";
import { StackScreenProps } from "@react-navigation/stack";
import { CompanyData } from "@interfaces/Companies";

type RootStackParamList = {
    GrowerProducts: { growerId: string };
};
type Props = StackScreenProps<RootStackParamList, "GrowerProducts">;

const GrowerProductsScreen = ({ route }: Props) => {
    const { growerId } = route.params;

    return <GrowerProducts growerId={growerId} />;
};

// @ts-ignore
GrowerProductsScreen.navigationOptions = {
    headerMode: "none",
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default GrowerProductsScreen;
