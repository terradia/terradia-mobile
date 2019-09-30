import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ButtonTerradia from '../buttons/Button';
import ButtonEmpty from '../buttons/ButtonEmpty'
import { Input } from 'react-native-elements';
import styles from './styles/LoginForm.style'




class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    /*
    Renvoyer vers la page de mot de passe oublié
     */
    forgotPassword = () => {
        this.setState({
        })
    };

    /*
    Request de login avec id et mdp
     */
    loginRequest = () => {
        this.setState({
        })
    };

    /*
    Renvoyer vers la page register
     */
    register = () => {
        console.log("avant appelle function");
        this.props.navigateFunction();
    };

    /*
    FACEBOOK
    */
    facebookLogin = () => {
        this.setState({
        })
    };
    
    /*
    APPLE
    */
    appleLogin = () => {
        this.setState({
        })
    };

    render() {
        return(
            <View style={styles.container}>

                <View style={styles.containerView}>
                    <Input
                        placeholder="Adresse email"
                        inputContainerStyle={[{
                            width: '88%',
                        }]}
                    />
                    <Input
                        secureTextEntry={true}
                        placeholder="Mot de passe"
                        inputContainerStyle={[{
                            width: '88%',
                        }]}
                    />
                </View>


                <ButtonTerradia
                    title="Connexion"
                    onPress={this.loginRequest}
                />


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