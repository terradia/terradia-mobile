import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext, ThemedBox } from "@components/theme/Theme";

declare interface Props {
    title: string;
    backButton: boolean;
    back?: () => void;
}

const MainHeader: FunctionComponent<Props> = ({ title, back, backButton }) => {
    const { goBack } = useNavigation();
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Header
                    placement="left"
                    leftComponent={
                        backButton === true ? (
                            <TouchableOpacity
                                onPress={(): void | boolean =>
                                    back ? back() : goBack()
                                }
                            >
                                <Feather
                                    name="arrow-left"
                                    size={24}
                                    color={theme.palette.fontColor}
                                />
                            </TouchableOpacity>
                        ) : null
                    }
                    centerComponent={{
                        text: title,
                        style: {
                            color: theme.palette.fontColor,
                            fontFamily: "MontserratSemiBold",
                            fontSize: 20
                        }
                    }}
                    backgroundColor={theme.palette.card.backgroundColor}
                    containerStyle={{
                        borderBottomColor: "transparent"
                    }}
                />
            )}
        </ThemeContext.Consumer>
    );
};

export default MainHeader;
