import React, { FunctionComponent, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../screens/authentication/styles/AccountRecovery.style';
import { MaterialIcons } from '@expo/vector-icons';
import i18n from '@i18n/i18n';
import { useMutation } from '@apollo/react-hooks';
import GenerateCodePasswordForgot from '../../graphql/user/generateCodePasswordForgot.graphql';
import ButtonTerradia from '@components/buttons/ButtonTerradia';
import { Kohana } from 'react-native-textinput-effects';

declare interface EmailStateProps {
    email: string;
    setEmail: (string) => void;
    setState: (boolean) => void;
}

const EmailState: FunctionComponent<EmailStateProps> = ({
    email,
    setEmail,
    setState
}) => {
    const [error, setError] = useState('');
    const [askNewCode, { loading }] = useMutation(GenerateCodePasswordForgot, {
        onCompleted: data => {
            if (data.generateCodePasswordForgot) {
                setState(false);
            } else {
                setError(i18n.t('AccountRecoveryScreen.invalidEmail'));
            }
        },
        onError: () => {
            setError(i18n.t('AccountRecoveryScreen.invalidEmail'));
        }
    });
    return (
        <>
            <View style={styles.inputTextContainer}>
                <Kohana
                    style={styles.inputText}
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
            </View>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity
                onPress={() => {
                    if (email.trim().length === 0) {
                        setError(
                            i18n.t('AccountRecoveryScreen.fillInputEmail')
                        );
                        return;
                    }
                    setState(false);
                }}
                style={styles.forgotContainer}
            >
                <Text style={styles.forgotText}>
                    {i18n.t('AccountRecoveryScreen.alreadyHaveTheCode')}
                </Text>
            </TouchableOpacity>
            <ButtonTerradia
                title={i18n.t('AccountRecoveryScreen.sendCode')}
                onPress={async (): Promise<void> => {
                    if (email.length === 0) {
                        setError(i18n.t('AccountRecoveryScreen.invalidEmail'));
                        return;
                    }
                    askNewCode({ variables: { email } });
                }}
                loading={loading}
                style={[{ borderColor: '#FFFFFF' }]}
                titleStyle={[{ color: '#FFFFFF' }]}
            />
        </>
    );
};

export default EmailState;
