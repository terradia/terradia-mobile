import { Image, View } from "react-native";
import React, { FunctionComponent, useEffect, useRef } from "react";
import Preload from "./Preload";
import AsyncStorage from "@react-native-async-storage/async-storage";

declare interface AuthLoadingScreen {
    navigation?: any;
}

const AuthLoadingScreen: FunctionComponent<AuthLoadingScreen> = ({
    navigation
}) => {
    const preloadRef = useRef(null);

    useEffect(() => {
        AsyncStorage.getItem("token").then(async data => {
            console.log(data);
            if (!data) {
                const value = await AsyncStorage.getItem("@first_connection");
                return navigation.navigate("HomeAuth", {
                    firstConnection: value
                });
            }
            preloadRef.current.preload();
        });
    }, []);
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Preload ref={preloadRef} />
            <Image
                style={{ height: 200, width: 200 }}
                source={require("../../assets/images/icon-terradia.png")}
            />
        </View>
    );
};

export default AuthLoadingScreen;
