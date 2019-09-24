import React, {Component} from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles/ButtonEmpty.style'

class ButtonEmpty extends Component {

    render() {
        const {style, ...rest} = this.props;
        return(
            <View style={[{width:"80%", paddingTop: 5, paddingBottom: 5}]}>
                <Button
                    buttonStyle={[styles.basic, style]}
                    {...rest}
                    type={"outline"}
                    /*titleStyle={[{fontFamily: }]}*/
                />
            </View>
        )
    }
};

export default ButtonEmpty;