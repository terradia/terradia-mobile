import React, { FunctionComponent, useState } from 'react';
import { View, AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';
import DoesAccountExistWithEmail from '../../graphql/facebook/doesAccountExistWithEmail.graphql';
import SignUpWithFacebook from '../../graphql/facebook/signUpWithFacebook.graphql';
import SignInWithFacebook from '../../graphql/facebook/signInWithFacebook.graphql';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Spinner from 'react-native-loading-spinner-overlay';
import i18n from '@i18n/i18n';
import ButtonEmpty from '@components/buttons/Button';

declare interface ThirdPartyLoginProps {
    navigateHome?: () => void;
}

const ThirdPartyLogin: FunctionComponent<ThirdPartyLoginProps> = ({
    navigateHome
}) => {
    const [facebookToken, setFacebookToken] = useState('');

    const _getExponentPushToken = async () => {
        const { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
        );
        if (status !== 'granted') {
            alert('No notification permissions!');
            return;
        }
        return await Notifications.getExpoPushTokenAsync();
    };

    const _onLoginSuccessful = async (token, userId) => {
        AsyncStorage.setItem('token', token).then();
        AsyncStorage.setItem('userId', userId).then();
        navigateHome();
    };

    const [signUpWithFacebook, { loading: signUpLoading }] = useMutation(
        SignUpWithFacebook,
        {
            onCompleted: async data => {
                _onLoginSuccessful(
                    data.signUpWithFacebook.token,
                    data.signUpWithFacebook.userId
                );
            },
            onError: error => {
                console.log(error);
            }
        }
    );
    const [signInWithFacebook, { loading: signInLoading }] = useMutation(
        SignInWithFacebook,
        {
            onCompleted: async data => {
                _onLoginSuccessful(
                    data.signInWithFacebook.token,
                    data.signInWithFacebook.userId
                );
            },
            onError: error => {
                console.log(error);
            }
        }
    );

    const [loadAccountAlreadyExist, { loading }] = useLazyQuery(
        DoesAccountExistWithEmail,
        {
            variables: { facebookToken: null },
            onCompleted: async data => {
                const exponentToken = await _getExponentPushToken();
                if (!data.doesFacebookAccountExistWithEmail) {
                    signUpWithFacebook({
                        variables: {
                            facebookToken,
                            exponentPushToken: exponentToken,
                            defineUserAsCostumer: true
                        }
                    });
                } else {
                    signInWithFacebook({
                        variables: {
                            facebookToken,
                            exponentPushToken: exponentToken
                        }
                    });
                }
            }
        }
    );

    async function logIn(): Promise<void> {
        try {
            await Facebook.initializeAsync('261809404828885', 'Terradia');
            const resp = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email']
            });
            if (resp.type === 'success') {
                await _getExponentPushToken();
                setFacebookToken(resp.token);
                loadAccountAlreadyExist({
                    variables: { facebookToken: resp.token }
                });
            } else {
                console.log('User canceled');
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <View>
            <Spinner
                visible={loading || signInLoading || signUpLoading}
                textContent={'Loading...'}
            />
            <ButtonEmpty
                title={i18n.t('loginScreen.loginFacebook')}
                style={[{ borderColor: 'blue' }]}
                titleStyle={[{ color: 'blue' }]}
                onPress={(): Promise<void> => logIn()}
            />
        </View>
    );
};

export default ThirdPartyLogin;
