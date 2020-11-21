import React, { FunctionComponent, ReactElement } from "react";

import GrowerProducts from "@components/growersProducts";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
    GrowerProducts: { grower: string };
};
type Props = StackScreenProps<RootStackParamList, "GrowerProducts">;

const GrowerProductsScreen = ({ route }: Props) => {
    const { grower } = route.params;
    return <GrowerProducts growerId={grower} />;
};

// @ts-ignore
GrowerProductsScreen.navigationOptions = {
    headerMode: "none",
    header: (): ReactElement => null,
    tabBarVisible: false
};
export default GrowerProductsScreen;
