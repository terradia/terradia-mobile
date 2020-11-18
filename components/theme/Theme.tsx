import React, { FunctionComponent } from "react";
import { SafeAreaView, View, ViewProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

export const ThemeContext = React.createContext(null);

export const ThemeConstants = {
    light: {
        primary: "#5cc04a",
        secondary: "#8fdd3d",
        third: "#2BA54C",
        warning: "#FF9900",
        yellow: "#FFE732",
        error: "#f5222d",
        backgroundColor: "#f0f0f0",
        lighterBackgroundColor: "#f6f6f6",
        card: {
            backgroundColor: "#FFFFFF"
        },
        fontColor: "#202020"
    },
    dark: {
        primary: "#5cc04a",
        secondary: "#8fdd3d",
        third: "#2BA54C",
        warning: "#FF9900",
        yellow: "#FFE732",
        error: "#f5222d",
        backgroundColor: "#202020",
        lighterBackgroundColor: "#3c3c3c",
        card: {
            backgroundColor: "#323232"
        },
        fontColor: "#FFFFFF"
    }
};

export const ThemedBox: FunctionComponent<ViewProps> = ({
    style,
    ...props
}) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <View
                    {...props}
                    style={[
                        {
                            backgroundColor: theme.palette.card.backgroundColor
                        },
                        style
                    ]}
                />
            )}
        </ThemeContext.Consumer>
    );
};

export const ThemedContainer: FunctionComponent<ViewProps> = ({
    style,
    ...props
}) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <View
                    {...props}
                    style={[
                        {
                            backgroundColor: theme.palette.backgroundColor
                        },
                        style
                    ]}
                />
            )}
        </ThemeContext.Consumer>
    );
};

export const ThemedSafeAreaView: FunctionComponent<ViewProps> = ({
    style,
    ...props
}) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <SafeAreaView
                    {...props}
                    style={[
                        {
                            backgroundColor: theme.palette.backgroundColor
                        },
                        style
                    ]}
                />
            )}
        </ThemeContext.Consumer>
    );
};

export const ThemedFeatherIcon: FunctionComponent<IconProps<any>> = ({
    style,
    size = 24,
    color = undefined,
    ...props
}) => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <Feather
                    name="arrow-left"
                    size={size}
                    color={color ? color : theme.palette.fontColor}
                    {...props}
                />
            )}
        </ThemeContext.Consumer>
    );
};

export function withTheme(Component) {
    return function ThemeComponent(props) {
        return (
            <ThemeContext.Consumer>
                {context => <Component {...props} {...context} />}
            </ThemeContext.Consumer>
        );
    };
}
