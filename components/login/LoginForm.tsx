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
import { useMutation } from '@apollo/react-hooks';
import i18n from '@i18n/i18n';
import LOGIN from '../../graphql/login.graphql';
import ThirdPartyLogin from '@components/login/ThirdPartyLogin';

declare interface LoginFormProps {
    navigateRegister?: any;
    navigateHome?: () => void;
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

    const onErrorHandler = (error): void => {
        console.log(error);
        Alert.alert('Adresse email ou mot de passe invalide');
    };

    const [login, { loading: mutationLoading }] = useMutation(LOGIN, {
        onError: error => {
            onErrorHandler(error);
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
                        placeholder={i18n.t('loginScreen.addrEmail')}
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
                        placeholder={i18n.t('loginScreen.password')}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                </View>
                <ButtonTerradia
                    title={i18n.t('loginScreen.login')}
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
                <Text>{i18n.t('loginScreen.forgot')}</Text>
            </TouchableOpacity>

            <View style={styles.registerView}>
                <ButtonEmpty
                    title={i18n.t('loginScreen.register')}
                    style={[{ borderColor: '#5CC04A' }]}
                    titleStyle={[{ color: '#5CC04A' }]}
                    onPress={register}
                />
                <ThirdPartyLogin navigateHome={navigateHome} />
                {/*<ButtonEmpty*/}
                {/*    title={i18n.t('loginScreen.loginFacebook')}*/}
                {/*    style={[{ borderColor: 'blue' }]}*/}
                {/*    titleStyle={[{ color: 'blue' }]}*/}
                {/*    onPress={facebookLogin}*/}
                {/*/>*/}
                {/*<ButtonEmpty*/}
                {/*    title={i18n.t('loginScreen.loginApple')}*/}
                {/*    style={[{ borderColor: 'black' }]}*/}
                {/*    titleStyle={[{ color: 'black' }]}*/}
                {/*    onPress={appleLogin}*/}
                {/*/>*/}
            </View>
        </View>
    );
};

export default LoginForm;
