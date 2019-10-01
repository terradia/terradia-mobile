import { ApolloProvider, graphql, Mutation } from 'react-apollo';
import React, {Component} from 'react';

const addDog = gql`
  mutation addDog($type: String!, $name: String!) {
    createDog(data: { type: $type, name: $name }) {
      id
    }
  }
`;

export default class extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <View style={styles.container}>
                    <Mutation mutation={addDog} refetchQueries={[{ query: dogQuery }]}>
                        {(addDogMutation, { data }) => (
                            <View>
                                <Text style={styles.welcome}>Dogs data:</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={text => this.setState({ name: text })}
                                    value={this.state.name}
                                    placeholder="name"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={text => this.setState({ type: text })}
                                    value={this.state.type}
                                    placeholder="type"
                                />
                                <Button
                                    onPress={() => {
                                        addDogMutation({
                                            variables: {
                                                type: this.state.type,
                                                name: this.state.name
                                            }
                                        })
                                            .then(res => res)
                                            .catch(err => <Text>{err}</Text>);
                                        this.setState({ type: '', name: '' });
                                    }}
                                    title="Add dog"
                                />
                            </View>
                        )}
                    </Mutation>
                    <Text style={styles.welcome}>My dogs:</Text>
                    <DogComponent />
                </View>
            </ApolloProvider>
        );
    }
}