import React, {Component} from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from '../AppLoading'

import styles from './styles/Button.style'

/*
This button is a gradient button
import it in your js/ts file (ieg: import ButtonTerradia from './utils/ButtonTerradia')

For use it :

<ButtonTerradia
    title="EXEMPLE"
/>
 */

class ButtonTerradia extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
       await Font.loadAsync({
            'Montserrat-Bold': require('../../../assets/fonts/ttf/Montserrat-Bold.ttf')
        });

        this.setState({ loading: false });
    }

    render() {
        const {style, ...rest} = this.props;
        console.log(this.state.loading);
        if (this.state.loading) {
            return (
                <AppLoading/>
            );
        }
            return (
                <View style={[{width: "80%", paddingTop: 5, paddingBottom: 5}]}>
                    <Button
                        buttonStyle={[styles.basic, style]}
                        {...rest}
                        linearGradientProps={{
                            colors: ['#8FDD3D', '#5CC04A'],
                            start: {x: 0, y: 1},
                            end: {x: 1, y: 0},
                        }}

                    />
                </View>
            );
    }
};

export default ButtonTerradia;