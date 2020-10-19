import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "react-navigation-hooks";

declare interface HeaderAccountProps {
    title: string;
    back?: () => void;
}

const HeaderAccount: FunctionComponent<HeaderAccountProps> = ({
    title,
    back
}) => {
    const { goBack } = useNavigation();
    return (
        <Header
            placement="left"
            leftComponent={
                <TouchableOpacity
                    onPress={(): void | boolean => (back ? back() : goBack())}
                >
                    <Feather name="arrow-left" size={24} color={"#202020"} />
                </TouchableOpacity>
            }
            centerComponent={{
                text: title,
                style: {
                    color: "#202020",
                    fontFamily: "MontserratSemiBold",
                    fontSize: 20
                }
            }}
            backgroundColor={"transparent"}
        />
    );
};

export default HeaderAccount;
