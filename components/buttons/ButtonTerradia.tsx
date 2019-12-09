import React from 'react';
import Button, {ButtonProps} from './Button';

/*
This button is a gradient button
import it in your js/ts file (ieg: import ButtonTerradia from './utils/ButtonTerradia')

For use it :

<ButtonTerradia
    title="EXEMPLE"
/>
 */

const ButtonTerradia = (props: ButtonProps) => {

    return(
            <Button
                style={props.style}
                title={props.title}
                titleStyle={props.titleStyle}
                onPress={props.onPress}
                disabled={props.disabled}
                loading={props.loading}
                linearGradientProps={{
                            colors: ['#8FDD3D', '#5CC04A'],
                            start: {x: 0, y: 1},
                            end: {x: 1, y: 0},
                        }}
            />
    )
};

export default ButtonTerradia;