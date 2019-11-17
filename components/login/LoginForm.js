import React, {Component} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import ButtonTerradia from '../buttons/Button';
import ButtonEmpty from '../buttons/ButtonEmpty'
import {Input} from 'react-native-elements';
import styles from './styles/LoginForm.style'
import {gql} from "apollo-boost"
import {Mutation} from "react-apollo";


/*
  Mutation login with email address & password
*/
const LOGIN = gql`
        mutation loginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            userId
        }
    }`;


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            returnMessage: '',
            token: '',
            userId: '',
        }
    }

    /*
    Renvoyer vers la page de mot de passe oublié
     */
    forgotPassword = () => {
        this.setState({})
    };


    /*
    Renvoyer vers la page register
     */
    register = () => {
        this.props.navigateRegister();
    };

    /*
    FACEBOOK
    */
    facebookLogin = () => {
        this.setState({})
    };

    /*
    APPLE
    */
    appleLogin = () => {
        this.setState({})
    };

    OnCompletedHandler = (data) => {
        console.log(data);
        AsyncStorage.setItem('token', this.state.token);
        AsyncStorage.setItem('userId', this.state.userId);
        this.props.navigateHome();
    };

    OnErrorHandler = (data) => {
        console.log("data:" + data);
        console.log("Error");
        const mess = data.message;
        Alert.alert("Adresse email ou mot de passe invalide");
        this.setState({
            returnMessage: mess
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Mutation mutation={LOGIN} onCompleted={this.OnCompletedHandler} onError={this.OnErrorHandler}>
                    {(login) => (
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
                                        secureTextEntry={true}
                                        onChangeText={text => this.setState({password: text})}
                                        placeholder="Mot de passe"
                                        inputContainerStyle={[{
                                            width: '88%',
                                        }]}
                                    />
                                </View>
                                <ButtonTerradia
                                    title="Connexion"
                                    onPress={() => {
                                        console.log(this.state.email);
                                        console.log(this.state.password);
                                        login({variables: {email: this.state.email, password: this.state.password}});
                                    }}
                                />
                            </View>
                        )}
                </Mutation>
                <TouchableOpacity
                    onPress={this.forgotPassword}
                    style={styles.forgotPasswordStyle}
                >
                    <Text>
                        Mot de passe oublié ?
                    </Text>
                </TouchableOpacity>

                <View style={styles.registerView}>
                    <ButtonEmpty
                        title="S'enregistrer"
                        style={[{borderColor: '#5CC04A'}]}
                        titleStyle={[{color: '#5CC04A'}]}
                        onPress={this.register}
                    />
                    <ButtonEmpty
                        title="Connexion avec Facebook"
                        style={[{borderColor: 'blue'}]}
                        titleStyle={[{color: 'blue'}]}
                        onPress={this.facebookLogin}

                    />
                    <ButtonEmpty
                        title="Connexion avec Apple"
                        style={[{borderColor: 'black'}]}
                        titleStyle={[{color: 'black'}]}
                        onPress={this.appleLogin}

                    />
                </View>
            </View>
        )
    }
};

export default LoginForm;