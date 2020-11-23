import * as React from "react";
import { TouchableOpacity, View, Text, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FIcon from "react-native-vector-icons/Feather";
import { FontAwesome } from "@expo/vector-icons";
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import { useTheme, withTheme } from "@components/theme/Theme";
import i18n from "@i18n/i18n";
import { Font } from "expo/build/removed.web";

interface Props {
    onPress: () => void;
    title?: string;
    rightIcon?: string;
    leftIcon?: string;
    color?: string;
    size?: number;
    textColor?: string;
    backgroundColor?: string;
    type?: "clear" | "outline" | "full";
    width?: string | number;
    textSize?: number;
    disabled?: boolean;
    margin?: string;
    loading?: boolean;
    zIndex?: number;
    radius?: number;
    titleWeight?: string;
    withShadow?: boolean;
    iconTypes?: string;
    testID?: string;
    fontFamily?: string;
    theme?: any;
    style?: any;
}

export const ButtonWithIcon: React.FunctionComponent<Props> = withTheme(
    ({
        textSize,
        width,
        leftIcon,
        rightIcon,
        color,
        onPress,
        size,
        title,
        textColor,
        backgroundColor,
        type = "clear",
        disabled = false,
        margin,
        loading = false,
        zIndex,
        radius,
        titleWeight,
        withShadow,
        iconTypes = "antd",
        testID,
        fontFamily,
        style,
        theme
    }) => {
        let col = color ? color : theme.palette.primary;
        col = disabled ? "lightgrey" : col;
        let background = withShadow ? "#ffffff" : "#ffffff00";
        let text = textColor ? textColor : col;
        let border = false;
        switch (type) {
            case "clear":
                break;
            case "outline":
                border = true;
                break;
            case "full":
                background = backgroundColor ? backgroundColor : col;
                text = "#ffffff";
                break;
            default:
                break;
        }
        const textSizeVal = textSize ? textSize : calcWidth(4.2);
        disabled = loading ? loading : disabled;
        const shadow = {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 5
        };

        const viewStyle: ViewStyle[] = [
            withShadow && shadow,
            {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: background,
                height: size ? size : 34,
                borderRadius: radius ? radius : 4,
                borderWidth: border ? 2 : 0,
                borderColor: border ? col : 0,
                paddingLeft: 7,
                paddingRight: 7,
                width: "100%"
            }
        ];

        const iconTypesList = {
            feather: FIcon,
            antd: Icon,
            fontawesome: FontAwesome
        };

        const IconComponent = iconTypesList[iconTypes];

        return (
            <TouchableOpacity
                testID={testID}
                onPress={disabled ? undefined : onPress}
                style={{
                    width: width ? width : "auto",
                    maxHeight: size ? size : 34,
                    minHeight: size ? size : 34,
                    margin: margin ? margin : 0,
                    zIndex: zIndex ? zIndex : 0,
                    ...style
                }}
            >
                <View style={viewStyle}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row"
                        }}
                    >
                        {leftIcon && (
                            <IconComponent
                                style={{
                                    marginRight: !!title ? 6 : 0
                                }}
                                name={leftIcon}
                                size={textSizeVal ? textSizeVal : 24}
                                color={text}
                            />
                        )}
                        {title && (
                            <Text
                                style={{
                                    fontSize: textSizeVal,
                                    color: text,
                                    textAlign: "center",
                                    fontWeight:
                                        titleWeight === "bold"
                                            ? titleWeight
                                            : "normal",
                                    marginRight: calcWidth(1.5),
                                    marginLeft: calcWidth(1.5),
                                    fontFamily: fontFamily
                                        ? fontFamily
                                        : "MontserratSemiBold"
                                }}
                            >
                                {loading ? i18n.t("loading") : title}
                            </Text>
                        )}
                        {rightIcon && (
                            <IconComponent
                                style={{
                                    marginRight: !!title ? 6 : 0
                                }}
                                name={rightIcon}
                                size={textSizeVal ? textSizeVal : 24}
                                color={text}
                            />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
);
