import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { ReactElement, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";
import { createUploadLink as CreateUploadLink } from "apollo-upload-client";
import { Text, YellowBox } from "react-native";
import { PaymentsStripe as Stripe } from "expo-payments-stripe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RootStack from "./navigation/RootStack";
YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

// setExpoStatusBarHeight(Constants.statusBarHeight);

import { ApolloLink } from "apollo-link";
import { withTheme, ThemeProvider, useTheme } from "@components/theme/Theme";
import useThenable from "@react-navigation/native/lib/typescript/src/useThenable";

{
    /**
     * CONFIG - TODO: MOVE IT IN A CONFIG FILE LATER
     */
}
const cache = new InMemoryCache({});
const stateLink = withClientState({
    fragmentMatcher: undefined,
    resolvers: undefined,
    typeDefs: undefined,
    cache,
    defaults: {
        testing: {
            __typename: "testing",
            name: "",
            age: 0
        }
    }
});

const uploadLink = new CreateUploadLink({
    // uri: __DEV__
    //     ? "http://localhost:8000/graphql"
    //     : "https://api.terradia.eu/graphql",
    uri: "https://api.terradia.eu/graphql",
    fetch: fetch
});

const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem("token");
    return {
        headers: {
            ...headers,
            authorization: token ? token : ""
        }
    };
});

Stripe.setOptionsAsync({
    publishableKey:
        "pk_test_51H6a9LHJwleKpfuCDWJkWOs8YiRE5Qcn0lCLcWUsvomazFg3G5fyxKguE1C1DXC0aimZLq3yVv12s6FTez0tIny700u3s3nIMI", // Your key
    androidPayMode: "test", // [optional] used to set wallet environment (AndroidPay)
    merchantId: "your_merchant_id" // [optional] used for payments with ApplePay
});
// const concat = [httpLink, authLink];

const client = new ApolloClient({
    link: ApolloLink.from([authLink, uploadLink]),
    cache: new InMemoryCache({
        cacheRedirects: {
            Query: {
                company: (_, { id }, { getCacheKey }) => {
                    return getCacheKey({
                        __typename: "Company",
                        id: id
                    });
                }
            }
        }
    }),
    resolvers: {
        Query: {}
    }
});

{
    /**
     * make client to rewrite the defaults every time the store resets
     */
}
// @ts-ignore
client.onResetStore(stateLink.writeDefaults);

{
    /**
     * basic App Provider
     */
}

async function loadResourcesAsync(): Promise<void> {
    await Promise.all([
        Asset.loadAsync([require("./assets/images/icon-terradia.png")]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
            Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
            MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
            MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
            MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
            MontserratLight: require("./assets/fonts/Montserrat-Light.ttf")
        })
    ]);
    return;
}

function handleLoadingError(error): void {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete): void {
    setLoadingComplete(true);
}

const prefix = Linking.makeUrl("/");

export default function App(props): ReactElement {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
    loadResourcesAsync().then(() => {
        setLoadingComplete(true);
    });

    const linking = {
        prefixes: [prefix]
    };

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <ThemeProvider value={"dark"}>
                <NavigationContainer
                    linking={linking}
                    fallback={<Text>Loading...</Text>}
                >
                    <ApolloProvider client={client}>
                        <RootStack />
                    </ApolloProvider>
                </NavigationContainer>
            </ThemeProvider>
        );
    }
}
