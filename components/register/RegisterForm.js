import React, {Component} from 'react';
import styles from "../login/styles/LoginForm.style";
import {View} from "react-native";
import {Input} from "react-native-elements";
import ButtonTerradia from "../buttons/Button";

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    registerRequest() {
        console.log("Register");
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.containerView}>
                    <Input
                        placeholder="Adresse email"
                        inputContainerStyle={[{
                            width: '88%',
                        }]}
                    />
                    <Input
                        keyboardType={'phone-pad'}
                        placeholder="Numéro de téléphone"
                        inputContainerStyle={[{
                            width: '88%',
                        }]}
                    />
                    <Input
                        placeholder="Nom"
                        inputContainerStyle={[{
                            width: '88%',
                        }]}
                    />
                    <Input
                        placeholder="Prénom"
                        inputContainerStyle={[{
                            width: '88%',
                        }]}
                    />
                    <Input
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        inputContainerStyle={[{
                            width: '88%',
                        }]}
                    />
                </View>
                <ButtonTerradia
                    title="S'enregistrer"
                    onPress={this.registerRequest}
                />
            </View>
        )
    }
}

export default RegisterForm;