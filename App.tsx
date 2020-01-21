import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { withClientState } from 'apollo-link-state';

import { setExpoStatusBarHeight } from 'react-navigation-collapsible';
import Constants from 'expo-constants';

setExpoStatusBarHeight(Constants.statusBarHeight);

import AppNavigator from './navigation/AppNavigator';

{
    /**
     * CONFIG - TODO: MOVE IT IN A CONFIG FILE LATER
     */
}
const cache = new InMemoryCache();
const stateLink = withClientState({
    fragmentMatcher: undefined,
    resolvers: undefined,
    typeDefs: undefined,
    cache,
    defaults: {
        testing: {
            __typename: 'testing',
            name: '',
            age: 0
        }
    }
});

const httpLink = new HttpLink({
    uri: 'https://0b415bd0.ngrok.io' + '/graphql',
    fetch: fetch
});

const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? token : ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
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

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

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
                <AppNavigator />
            </ApolloProvider>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png')
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
            MontserratSemiBold: require('./assets/fonts/Montserrat-Medium.ttf'),
            MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
            MontserratLight: require('./assets/fonts/Montserrat-Light.ttf')
        })
    ]);
    return;
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}
