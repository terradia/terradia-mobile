import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient} from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { withClientState } from 'apollo-link-state'

{/**
 * CONFIG - TODO: MOVE IT IN A CONFIG FILE LATER
 */}
const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults: {
    testing: {
      __typename: 'testing',
      name: '',
      age: 0
    }
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    new HttpLink({ uri: 'http://terradia.eu' })
  ])
});

{/**
 * make client to rewrite the defaults every time the store resets
 */}
client.onResetStore(stateLink.writeDefaults);

{/**
 * basic App Provider
 */}
const App = () => {
  return <ApolloProvider client={client}>
    <View style={styles.container}>
      <Text>Terradia</Text>
    </View>
  </ApolloProvider>
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
