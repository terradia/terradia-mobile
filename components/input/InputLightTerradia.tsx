import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native';

export declare interface ButtonProps {
    onChangeText: any;
    value: any;
    style?: StyleProp<TextStyle>;
    placeholder?: string;
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 42,
        color: '#424242',
        fontFamily: 'Montserrat',
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1
    }
});

const Button: FunctionComponent<ButtonProps> = ({
    onChangeText,
    value,
    style,
    placeholder
}) => {
    return (
        <TextInput
            style={[style, styles.input]}
            onChangeText={(text: string): void => onChangeText(text)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#575757'}
        />
    );
};

export default Button;
