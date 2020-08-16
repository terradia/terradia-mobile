import React, { FunctionComponent } from "react";
import Button, { ButtonProps } from "./Button";

/*
This button is a gradient button
import it in your js/ts file (ieg: import ButtonTerradia from './utils/ButtonTerradia')

For use it :

<ButtonTerradia
    title="EXEMPLE"
/>
 */

const ButtonTerradia: FunctionComponent<ButtonProps> = ({
    style,
    title,
    titleStyle,
    onPress,
    disabled,
    loading
}) => {
    return (
        <Button
            style={style}
            title={title}
            titleStyle={titleStyle}
            onPress={onPress}
            disabled={disabled}
            loading={loading}
            linearGradientProps={{
                colors: ["#8FDD3D", "#5CC04A"],
                start: { x: 0, y: 1 },
                end: { x: 1, y: 0 }
            }}
        />
    );
};

export default ButtonTerradia;
