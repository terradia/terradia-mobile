import React, { FunctionComponent } from "react";
import { SafeAreaView, View, ViewProps, Text, TextProps } from 'react-native';
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
        disabled: "#e4e3e3",
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
        disabled: "#e4e3e3",
        lighterBackgroundColor: "#4f4f4f",
        card: {
            backgroundColor: "#323232"
        },
        fontColor: "#FFFFFF"
    }
};

export function withTheme(Component) {
    return function ThemeComponent(props) {
        return (
            <ThemeContext.Consumer>
                {theme => <Component {...props} theme={theme} />}
            </ThemeContext.Consumer>
        );
    };
}

function useTheme(defaultValue?: string) {
    const [theme, setTheme] = React.useState<"light" | "dark" | string>(
        defaultValue ? defaultValue : "light"
    );

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return {
        type: theme,
        palette: ThemeConstants[theme],
        toggleTheme
    };
}

export const ThemeProvider = ({ children, value, ...props }) => {
    const theme = useTheme(value ? value : "light");

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export const ThemedBox: FunctionComponent<ViewProps> = withTheme(
    ({ style, theme, ...props }) => {
        return (
            <View
                {...props}
                style={[
                    {
                        backgroundColor: theme.palette.card.backgroundColor
                    },
                    style
                ]}
            />
        );
    }
);

export const ThemedContainer: FunctionComponent<ViewProps> = withTheme(
    ({ style, theme, ...props }) => {
        return (
            <View
                {...props}
                style={[
                    {
                        backgroundColor: theme.palette.backgroundColor
                    },
                    style
                ]}
            />
        );
    }
);

export const ThemedText: FunctionComponent<TextProps> = withTheme(
    ({ style, theme, children, ...props }) => {
        return (
            <Text
                {...props}
                style={[
                    {
                        color: theme.palette.fontColor
                    },
                    style
                ]}
            >
                {children}
            </Text>
        );
    }
);

export const ThemedSafeAreaView: FunctionComponent<ViewProps> = withTheme(
    ({ style, theme, ...props }) => {
        return (
            <SafeAreaView
                {...props}
                style={[
                    {
                        backgroundColor: theme.palette.backgroundColor
                    },
                    style
                ]}
            />
        );
    }
);

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
