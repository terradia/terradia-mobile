import React, { FunctionComponent } from 'react';
import {
    StyleProp,
    StyleSheet,
    TextInput,
    TextStyle,
    View
} from 'react-native';
import i18n from '@i18n/i18n';
import { Feather } from '@expo/vector-icons';

export declare interface ButtonProps {
    onChangeText: any;
    value: any;
    style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 10,
        backgroundColor: '#ECECEC',
        width: '100%'
    },
    searchIcon: {
        paddingLeft: 30
    },
    input: {
        paddingLeft: 10,
        width: '100%',
        height: 42,
        color: '#424242',
        fontFamily: 'Montserrat'
    }
});

const Button: FunctionComponent<ButtonProps> = ({
    onChangeText,
    value,
    style
}) => {
    return (
        <View style={styles.searchSection}>
            <Feather name="search" size={19} style={styles.searchIcon} />
            <TextInput
                style={[style, styles.input]}
                onChangeText={(text: string): void => onChangeText(text)}
                value={value}
                placeholder={i18n.t('searchScreen.search1')}
                placeholderTextColor={'#575757'}
            />
        </View>
    );
};

export default Button;
