import React, { FunctionComponent, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import HeaderAccount from '@components/account/Header';
import { Entypo } from '@expo/vector-icons';
import AccountModal from '@components/account/modal/AccountModal';
import i18n from '@i18n/i18n';
import { useQuery } from '@apollo/react-hooks';
import { GetUserData } from '@interfaces/User';
import getUser from '../../graphql/getUser.graphql';
import AccountImage from '@components/account/AccountImage';

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    fieldContainer: {
        marginLeft: 15,
        marginRight: 15
    },
    subFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginTop: 10
    },
    fieldTitle: {
        fontFamily: 'MontserratBold',
        fontSize: 18,
        color: '#575757'
    },
    subFieldText: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: '#575757'
    },
    verifiedText: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: '#4AA542'
    },
    nonVerifiedText: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: '#F6A300'
    },
    rightContent: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

const Account: FunctionComponent = () => {
    const [currentEditing, setCurrentEditing] = useState(null);
    const [initialValue, setInitialValue] = useState('');
    const { data: me } = useQuery<GetUserData>(getUser);
    return (
        <View>
            <AccountModal
                currentEditing={currentEditing}
                setCurrentEditing={setCurrentEditing}
                initialValue={initialValue}
            />
            <HeaderAccount />
            <View style={styles.imageContainer}>
                <AccountImage me={me && me.getUser} />
            </View>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.firstName);
                    setCurrentEditing('firstName');
                }}
            >
                <Text style={styles.fieldTitle}>
                    {i18n.t('accountScreen.firstName')}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>
                        {me.getUser.firstName}
                    </Text>
                    <Entypo name="chevron-right" size={27} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.lastName);
                    setCurrentEditing('lastName');
                }}
            >
                <Text style={styles.fieldTitle}>
                    {i18n.t('accountScreen.lastName')}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>
                        {me.getUser.lastName}
                    </Text>
                    <Entypo name="chevron-right" size={27} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.phone);
                    setCurrentEditing('phoneNumber');
                }}
            >
                <Text style={styles.fieldTitle}>
                    {i18n.t('accountScreen.phoneNumber')}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>{me.getUser.phone}</Text>
                    <View style={styles.rightContent}>
                        <Text style={styles.verifiedText}>
                            {i18n.t('accountScreen.verified')}
                        </Text>
                        <Entypo name="chevron-right" size={27} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue(me.getUser.email);
                    setCurrentEditing('email');
                }}
            >
                <Text style={styles.fieldTitle}>
                    {i18n.t('accountScreen.email')}
                </Text>
                <View style={styles.subFieldContainer}>
                    <Text style={styles.subFieldText}>{me.getUser.email}</Text>
                    <View style={styles.rightContent}>
                        <Text style={styles.nonVerifiedText}>
                            {i18n.t('accountScreen.notVerified')}
                        </Text>
                        <Entypo name="chevron-right" size={27} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                    setInitialValue('');
                    setCurrentEditing('password');
                }}
            >
                <Text style={styles.fieldTitle}>Mot de passe</Text>
                <View style={styles.subFieldContainer}>
                    <TextInput
                        secureTextEntry={true}
                        editable={false}
                        style={styles.subFieldText}
                    >
                        Hello world
                    </TextInput>
                    <View style={styles.rightContent}>
                        <Text style={styles.nonVerifiedText}>Non vérifié</Text>
                        <Entypo name="chevron-right" size={27} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Account;
