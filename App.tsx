import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { ReactElement, useState } from "react";
import { AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";
import * as Linking from "expo-linking";
import { setExpoStatusBarHeight } from "react-navigation-collapsible";
import Constants from "expo-constants";
import { createUploadLink as CreateUploadLink } from "apollo-upload-client";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);

setExpoStatusBarHeight(Constants.statusBarHeight);

import AppNavigator from "./navigation/AppNavigator";
import { ApolloLink } from "apollo-link";

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
    uri: "https://204b88ced55c.ngrok.io" + "/graphql",
    fetch: fetch
});
console.log("Hello lol");

const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem("token");
    return {
        headers: {
            ...headers,
            authorization: token ? token : ""
        }
    };
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
        Asset.loadAsync([
            require("./assets/images/robot-dev.png"),
            require("./assets/images/robot-prod.png")
        ]),
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

export default function App(props): ReactElement {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const SimpleApp = AppNavigator;
    // Linking.getInitialURL().then((data) => {
    //     setPrefix(data);
    // });
    //
    // const _handleLink = (data) => {
    //     console.log(data);
    //     setPrefix(data);
    // }
    // Linking.addEventListener('url', _handleLink);
    // Linking.addEventListener('url', callback);
    const prefixPath = Linking.makeUrl("/");

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        return (
            <ApolloProvider client={client}>
                <SimpleApp uriPrefix={prefixPath} />
            </ApolloProvider>
        );
    }
}
