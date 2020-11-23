import { LinearGradient } from "expo-linear-gradient";
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import { View } from "react-native";
import React, { FunctionComponent } from "react";
import { ThemedBox, ThemedContainer } from "@components/theme/Theme";

interface Props {
    light?: boolean;
}

const HeaderFooter: FunctionComponent<Props> = ({
    light = false,
    ...props
}) => {
    const ContainerComponent = light ? ThemedBox : ThemedContainer;

    return (
        <View
            style={{
                position: "relative",
                height: calcWidth(4)
            }}
        >
            <LinearGradient
                style={{ height: calcWidth(4) }}
                colors={["#8FDD3D", "#5CC04A"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            />
            <ContainerComponent
                style={{
                    position: "absolute",
                    top: 0,
                    zIndex: 1,
                    width: calcWidth(100),
                    height: calcWidth(8),
                    borderRadius: calcWidth(4)
                }}
            />
        </View>
    );
};

export default HeaderFooter;
