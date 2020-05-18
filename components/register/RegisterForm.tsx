import React, { FunctionComponent, useState } from 'react';
import styles from '../login/styles/LoginForm.style';
import { View, Alert, AsyncStorage } from 'react-native';
import { Input } from 'react-native-elements';
import ButtonTerradia from '../buttons/ButtonTerradia';
import { useMutation } from '@apollo/react-hooks';
import i18n from '@i18n/i18n';
import REGISTER from '../../graphql/register.graphql';

declare interface RegisterFormProps {
    navigateHome?: () => void;
}

const RegisterForm: FunctionComponent<RegisterFormProps> = ({
    navigateHome
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const onCompletedHandler = (data): any => {
        AsyncStorage.setItem('token', data.register.token).then(() => {
            navigateHome();
        });
    };

    const onErrorHandler = (data): any => {
        Alert.alert(data.message);
    };

    const [register, { loading: mutationLoading }] = useMutation(REGISTER, {
        onError: data => {
            onErrorHandler(data);
        },
        onCompleted: data => {
            onCompletedHandler(data);
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.containerView}>
                    <Input
                        placeholder={i18n.t('registerScreen.addrEmail')}
                        keyboardType={'email-address'}
                        onChangeText={(text: string): void => setEmail(text)}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                    <Input
                        keyboardType={'phone-pad'}
                        placeholder={i18n.t('registerScreen.phone')}
                        onChangeText={(text: string): void => setPhone(text)}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                    <Input
                        placeholder={i18n.t('registerScreen.lastName')}
                        onChangeText={(text: string): void => setLastName(text)}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                    <Input
                        placeholder={i18n.t('registerScreen.firstName')}
                        onChangeText={(text: string): void =>
                            setFirstName(text)
                        }
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                    <Input
                        placeholder={i18n.t('registerScreen.password')}
                        onChangeText={(text: string): void => setPassword(text)}
                        secureTextEntry={true}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                </View>
                <ButtonTerradia
                    title={i18n.t('registerScreen.register')}
                    style={[{ borderColor: '#FFFFFF' }]}
                    titleStyle={[{ color: '#FFFFFF' }]}
                    loading={mutationLoading}
                    onPress={(): void => {
                        register({
                            variables: {
                                email: email,
                                password: password,
                                firstName: firstName,
                                phone: phone,
                                lastName: lastName
                            }
                        }).then();
                    }}
                />
            </View>
        </View>
    );
};

export default RegisterForm;
