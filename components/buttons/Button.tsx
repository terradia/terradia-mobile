import React, { Component, FunctionComponent } from "react";
import { View } from "react-native";
import { Button as ElementButton } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles/ButtonEmpty.style";

//
// class ButtonEmpty extends Component {
//
//     render() {
//         const {style, ...rest} = this.props;
//         return(
//             <View style={[{width:"80%", paddingTop: 5, paddingBottom: 5}]}>
//                 <Button
//                     buttonStyle={[styles.basic, style]}
//                     {...rest}
//                     type={"outline"}
//                     /*titleStyle={[{fontFamily: }]}*/
//                 />
//             </View>
//         )
//     }
// };

export declare interface ButtonProps {
    style?: object;
    rest?: any;
    title: string;
    titleStyle?: object;
    onPress?: any;
    disabled?: boolean;
    linearGradientProps?: object;
    loading?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
    style,
    rest,
    title,
    titleStyle,
    onPress,
    disabled,
    linearGradientProps,
    loading
}) => {
    console.log(linearGradientProps);
    if (linearGradientProps) {
        return (
            <View style={[{ width: "80%", paddingTop: 5, paddingBottom: 5 }]}>
                <ElementButton
                    ViewComponent={LinearGradient}
                    buttonStyle={[styles.basic, style]}
                    title={title}
                    titleStyle={titleStyle}
                    onPress={onPress}
                    type={"outline"}
                    disabled={disabled}
                    loading={loading}
                    linearGradientProps={linearGradientProps}
                    /*titleStyle={[{fontFamily: }]}*/
                />
            </View>
        );
    } else {
        return (
            <ElementButton
                buttonStyle={[styles.basic, style]}
                title={title}
                titleStyle={titleStyle}
                onPress={onPress}
                type={"outline"}
                disabled={disabled}
                loading={loading}
                /*titleStyle={[{fontFamily: }]}*/
            />
        );
    }
};

export default Button;
