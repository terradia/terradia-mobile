import { LinearGradient } from "expo-linear-gradient";
import { calcWidth } from "../../utils/deviceResponsiveHelper";
import { View } from "react-native";
import React, { FunctionComponent } from "react";
import { ThemedBox, ThemedContainer } from "@components/theme/Theme";

const HeaderFooter: FunctionComponent = () => {
    return (
        <ThemedContainer
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
            <ThemedContainer
                style={{
                    position: "absolute",
                    top: 0,
                    zIndex: 1,
                    width: calcWidth(100),
                    height: calcWidth(8),
                    borderRadius: calcWidth(4)
                }}
            />
        </ThemedContainer>
    );
};

export default HeaderFooter;
