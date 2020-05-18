import React, { FunctionComponent, useState } from 'react';
import styles from '../login/styles/LoginForm.style';
import { View, Alert, AsyncStorage } from 'react-native';
import ButtonTerradia from '../buttons/ButtonTerradia';
import { useMutation } from '@apollo/react-hooks';
import i18n from '@i18n/i18n';
import REGISTER from '../../graphql/register.graphql';
import { Kohana } from 'react-native-textinput-effects';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

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
                    <Kohana
                        style={styles.inputContainer}
                        label={i18n.t('registerScreen.addrEmail')}
                        keyboardType={'email-address'}
                        onChangeText={(text: string): void => setEmail(text)}
                        iconClass={MaterialIcons}
                        iconName={'email'}
                        iconColor={'#8FDD3D'}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={styles.inputStyle}
                        labelContainerStyle={{ padding: 10 }}
                        iconContainerStyle={{ padding: 10 }}
                    />
                    <Kohana
                        style={styles.inputContainer}
                        keyboardType={'phone-pad'}
                        label={i18n.t('registerScreen.phone')}
                        onChangeText={(text: string): void => setPhone(text)}
                        iconClass={MaterialIcons}
                        iconName={'phone'}
                        iconColor={'#8FDD3D'}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={styles.inputStyle}
                        labelContainerStyle={{ padding: 10 }}
                        iconContainerStyle={{ padding: 10 }}
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={i18n.t('registerScreen.lastName')}
                        onChangeText={(text: string): void => setLastName(text)}
                        iconClass={FontAwesome}
                        iconName={'user'}
                        iconColor={'#8FDD3D'}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={styles.inputStyle}
                        labelContainerStyle={{ padding: 10 }}
                        iconContainerStyle={{ padding: 10 }}
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={i18n.t('registerScreen.firstName')}
                        onChangeText={(text: string): void =>
                            setFirstName(text)
                        }
                        iconClass={FontAwesome}
                        iconName={'user'}
                        iconColor={'#8FDD3D'}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={styles.inputStyle}
                        labelContainerStyle={{ padding: 10 }}
                        iconContainerStyle={{ padding: 10 }}
                    />
                    <Kohana
                        style={styles.inputContainer}
                        label={i18n.t('registerScreen.password')}
                        onChangeText={(text: string): void => setPassword(text)}
                        iconClass={FontAwesome}
                        iconName={'lock'}
                        secureTextEntry={true}
                        iconColor={'#8FDD3D'}
                        inputPadding={0}
                        labelStyle={styles.inputLabelStyle}
                        inputStyle={styles.inputStyle}
                        labelContainerStyle={{ padding: 10 }}
                        iconContainerStyle={{ padding: 10 }}
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
