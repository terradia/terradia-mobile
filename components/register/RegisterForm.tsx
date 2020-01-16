import React, { FunctionComponent, useState } from 'react';
import styles from '../login/styles/LoginForm.style';
import { View, Alert, AsyncStorage } from 'react-native';
import { Input } from 'react-native-elements';
import ButtonTerradia from '../buttons/ButtonTerradia';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const REGISTER = gql`
    mutation registerMutation(
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
        $phone: String!
    ) {
        register(
            email: $email
            password: $password
            phone: $phone
            firstName: $firstName
            lastName: $lastName
        ) {
            token
            message
            userId
        }
    }
`;

const RegisterForm: FunctionComponent<any> = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const onCompletedHandler = (data): any => {
        Alert.alert('Success');
        AsyncStorage.setItem('token', data.register.token).then();
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
                        placeholder="Adresse email"
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
                        placeholder="Numéro de téléphone"
                        onChangeText={(text: string): void => setPhone(text)}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                    <Input
                        placeholder="Nom"
                        onChangeText={(text: string): void => setLastName(text)}
                        inputContainerStyle={[
                            {
                                width: '88%'
                            }
                        ]}
                    />
                    <Input
                        placeholder="Prénom"
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
                        placeholder="Mot de passe"
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
                    title="S'enregistrer"
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
