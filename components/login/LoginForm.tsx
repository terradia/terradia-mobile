import React, { FunctionComponent, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native';
import ButtonTerradia from '../buttons/ButtonTerradia';
import ButtonEmpty from '../buttons/Button';
import { Input } from 'react-native-elements';
import styles from './styles/LoginForm.style';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

/*
  Mutation login with email address & password
*/
const LOGIN = gql`
    mutation loginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            userId
        }
    }
`;

export declare interface LoginFormProps {
    navigateRegister?: any;
    navigateHome?: any;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({
    navigateHome,
    navigateRegister
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onCompletedHandler = (data): void => {
        AsyncStorage.setItem('token', data.login.token).then();
        AsyncStorage.setItem('userId', data.login.userId).then();
        navigateHome();
    };

    const onErrorHandler = (): void => {
        console.log('Error');
        Alert.alert('Adresse email ou mot de passe invalide');
    };

    const [login, { loading: mutationLoading }] = useMutation(LOGIN, {
        onError: () => {
            onErrorHandler();
        },
        onCompleted: data => {
            onCompletedHandler(data);
        }
    });

    /*
    Renvoyer vers la page de mot de passe oublié
     */
    const forgotPassword = (): void => {
        console.log('Lost password');
    };

    /*
    Renvoyer vers la page register
     */
    const register = (): void => {
        navigateRegister();
    };

    /*
    FACEBOOK
    */
    const facebookLogin = (): void => {
        console.log('Facebook login');
    };

    /*
    APPLE
    */
    const appleLogin = (): void => {
        console.log('Apple login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.containerView}>
                    <Input
                        keyboardType={'email-address'}
                        placeholder="Adresse email"
                        onChangeText={(text): void => setEmail(text)}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                    <Input
                        secureTextEntry={true}
                        onChangeText={(text): void => setPassword(text)}
                        placeholder="Mot de passe"
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                </View>
                <ButtonTerradia
                    title="Connexion"
                    style={[{ borderColor: '#FFFFFF' }]}
                    titleStyle={[{ color: '#FFFFFF' }]}
                    loading={mutationLoading}
                    onPress={(): void => {
                        console.log(email);
                        console.log(password);
                        login({
                            variables: { email: email, password: password }
                        }).then();
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={forgotPassword}
                style={styles.forgotPasswordStyle}
            >
                <Text>Mot de passe oublié ?</Text>
            </TouchableOpacity>

            <View style={styles.registerView}>
                <ButtonEmpty
                    title="S'enregistrer"
                    style={[{ borderColor: '#5CC04A' }]}
                    titleStyle={[{ color: '#5CC04A' }]}
                    onPress={register}
                />
                <ButtonEmpty
                    title="Connexion avec Facebook"
                    style={[{ borderColor: 'blue' }]}
                    titleStyle={[{ color: 'blue' }]}
                    onPress={facebookLogin}
                />
                <ButtonEmpty
                    title="Connexion avec Apple"
                    style={[{ borderColor: 'black' }]}
                    titleStyle={[{ color: 'black' }]}
                    onPress={appleLogin}
                />
            </View>
        </View>
    );
};

export default LoginForm;
