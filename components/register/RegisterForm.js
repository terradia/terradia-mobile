import React, {Component} from 'react';
import styles from "../login/styles/LoginForm.style";
import {View, Alert, AsyncStorage} from "react-native";
import {Input} from "react-native-elements";
import ButtonTerradia from "../buttons/Button";
import {gql} from "apollo-boost";
import {Mutation} from 'react-apollo';

const REGISTER = gql`
        mutation registerMutation($email: String!, $password: String!, $firstName: String!, $lastName: String!, $phone: String!) {
        register(email: $email, password: $password, phone: $phone, firstName: $firstName, lastName: $lastName) {
            token
            message
            userId
        }
    }`;

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
        }
    }

    OnCompletedHandler = (data) => {
        console.log(data);
        Alert.alert("Success");
        AsyncStorage.setItem('token', data.register.token);
    };

    OnErrorHandler = (data) => {
        console.log(data);
        Alert.alert("error");
    };

    render() {
        return (
            <View style={styles.container}>
                <Mutation mutation={REGISTER} onCompleted={this.OnCompletedHandler} onError={this.OnErrorHandler}>
                    {(register) => (
                        <View style={styles.wrapper}>
                            <View style={styles.containerView}>
                                <Input
                                    placeholder="Adresse email"
                                    onChangeText={text => this.setState({email: text})}
                                    inputContainerStyle={[{
                                        width: '88%',
                                    }]}
                                />
                                <Input
                                    keyboardType={'phone-pad'}
                                    placeholder="Numéro de téléphone"
                                    onChangeText={text => this.setState({phone: text})}
                                    inputContainerStyle={[{
                                        width: '88%',
                                    }]}
                                />
                                <Input
                                    placeholder="Nom"
                                    onChangeText={text => this.setState({lastName: text})}
                                    inputContainerStyle={[{
                                        width: '88%',
                                    }]}
                                />
                                <Input
                                    placeholder="Prénom"
                                    onChangeText={text => this.setState({firstName: text})}
                                    inputContainerStyle={[{
                                        width: '88%',
                                    }]}
                                />
                                <Input
                                    placeholder="Mot de passe"
                                    onChangeText={text => this.setState({password: text})}
                                    secureTextEntry={true}
                                    inputContainerStyle={[{
                                        width: '88%',
                                    }]}
                                />
                            </View>
                            <ButtonTerradia
                                title="S'enregistrer"
                                onPress={() => {
                                    register({
                                        variables: {
                                            email: this.state.email,
                                            password: this.state.password,
                                            firstName: this.state.firstName,
                                            phone: this.state.phone,
                                            lastName: this.state.lastName,
                                        }
                                    });
                                }}
                            />
                        </View>
                    )}
                </Mutation>
            </View>
        )
    }
}

export default RegisterForm;