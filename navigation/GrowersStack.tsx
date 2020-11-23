import React, { FunctionComponent, ReactElement } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import GrowersScreen from "../screens/growers/GrowersScreen";
import LinearGradient from "react-native-linear-gradient";
import NavBar from "@components/header/NavBar";

const Stack = createStackNavigator();

const GrowersStack: FunctionComponent = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Growers"
                component={GrowersScreen}
                options={{
                    headerTitle: (): ReactElement => <NavBar />,
                    headerBackground: (): ReactElement => (
                        <LinearGradient
                            style={{ flex: 1, height: 80 }}
                            colors={["#8FDD3D", "#5CC04A"]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        />
                    ),
                    headerLeft: null,
                    headerStyle: { height: 80, backgroundColor: "transparent" },
                    gestureEnabled: false
                }}
            />
        </Stack.Navigator>
    );
};

export default GrowersStack;
