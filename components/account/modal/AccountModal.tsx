import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { colors, Header } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import ButtonTerradia from '@components/buttons/ButtonTerradia';
import i18n from '@i18n/i18n';
import updateUser from '../../../graphql/user/updateUser.graphql';
import { useMutation } from '@apollo/react-hooks';
import PhoneInput from 'react-native-phone-input';

declare interface AccountModalProps {
    currentEditing: string;
    setCurrentEditing: (string) => void;
    initialValue: string;
}

const styles = StyleSheet.create({
    labelInput: {
        fontFamily: 'MontserratSemiBold',
        color: '#575757'
    },
    contentContainer: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    phoneInputUnderLine: {
        height: 1,
        backgroundColor: 'rgb(136, 145, 155)',
        marginLeft: 40,
        marginTop: 10
    },
    error: {
        margin: 5,
        fontSize: 12,
        color: colors.error
    },
    buttonUpdateContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const AccountModal: FunctionComponent<AccountModalProps> = ({
    currentEditing,
    setCurrentEditing,
    initialValue
}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [UpdateUser, { loading }] = useMutation(updateUser, {
        onCompleted: () => {
            setCurrentEditing(null);
            setErrorMessage('');
        },
        onError: () => {
            setErrorMessage(i18n.t('accountScreen.invalidInput'));
        }
    });
    const [value, setValue] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    const phoneRef = useRef(null);

    const _update = (): void => {
        if (currentEditing === 'phoneNumber') {
            const phone = phoneRef.current.getValue();
            if (!phoneRef.current.isValidNumber()) {
                setErrorMessage(i18n.t('accountScreen.invalidPhoneNumber'));
                return;
            }
            UpdateUser({
                variables: {
                    phone
                }
            });
        } else {
            if (currentEditing === 'password') {
                if (value !== checkPassword) {
                    setErrorMessage(
                        i18n.t('accountScreen.passwordDoesntMatch')
                    );
                    return;
                }
            }
            if (value.length === 0) {
                setErrorMessage(i18n.t('accountScreen.fillInput'));
                return;
            }
            UpdateUser({
                variables: {
                    [currentEditing]: value
                }
            });
        }
    };

    return (
        <Modal isVisible={!!currentEditing} style={{ margin: 0 }}>
            <View style={styles.container}>
                <Header
                    placement="left"
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => setCurrentEditing(null)}
                        >
                            <Entypo name="cross" size={26} />
                        </TouchableOpacity>
                    }
                    backgroundColor={'transparent'}
                />
                <View style={styles.contentContainer}>
                    {currentEditing === 'phoneNumber' ? (
                        <View style={{}}>
                            <Text
                                style={[
                                    styles.labelInput,
                                    { marginBottom: 10 }
                                ]}
                            >
                                {i18n.t('accountScreen.phoneNumber')}
                            </Text>
                            <PhoneInput
                                ref={phoneRef}
                                initialCountry={'fr'}
                                autoFormat={true}
                                value={initialValue}
                            />
                            <View style={styles.phoneInputUnderLine} />
                            <Text style={styles.error}>{errorMessage}</Text>
                        </View>
                    ) : (
                        <>
                            <Input
                                style={{}}
                                value={value}
                                label={i18n.t(
                                    'accountScreen.' + currentEditing
                                )}
                                labelStyle={styles.labelInput}
                                onChangeText={value => setValue(value)}
                                errorMessage={errorMessage}
                                autoCorrect={false}
                                secureTextEntry={currentEditing === 'password'}
                            />
                            {currentEditing === 'password' && (
                                <Input
                                    containerStyle={{ marginTop: 20 }}
                                    value={checkPassword}
                                    label={i18n.t(
                                        'accountScreen.confirmNewPassword'
                                    )}
                                    labelStyle={styles.labelInput}
                                    onChangeText={value =>
                                        setCheckPassword(value)
                                    }
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                />
                            )}
                        </>
                    )}
                    <View style={styles.buttonUpdateContainer}>
                        <ButtonTerradia
                            title={
                                currentEditing !== null
                                    ? i18n.t(
                                          'accountScreen.update' +
                                              currentEditing
                                                  .charAt(0)
                                                  .toUpperCase() +
                                              currentEditing.slice(1)
                                      )
                                    : ''
                            }
                            style={[{ borderColor: '#FFFFFF' }]}
                            titleStyle={[{ color: '#FFFFFF' }]}
                            loading={loading}
                            onPress={(): void => {
                                _update();
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AccountModal;
