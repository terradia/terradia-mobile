import React, {Component} from 'react';
import { View } from 'react-native';
import { Button as ElementButton } from 'react-native-elements';

import styles from './styles/ButtonEmpty.style'

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
    title?: string;
    titleStyle?: object;
    onPress?: any;
    disabled?: boolean;
    linearGradientProps?: object
}

const Button = (props: ButtonProps) => {
    return(
            <View style={[{width:"80%", paddingTop: 5, paddingBottom: 5}]}>
                <ElementButton
                    buttonStyle={[styles.basic, props.style]}
                    title={props.title}
                    titleStyle={props.titleStyle}
                    onPress={props.onPress}
                    type={"outline"}
                    disabled={props.disabled}
                    linearGradientProps={props.linearGradientProps}
                    /*titleStyle={[{fontFamily: }]}*/
                />
            </View>
        )
};

export default Button;