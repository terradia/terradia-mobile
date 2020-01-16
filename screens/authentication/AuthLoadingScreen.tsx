import { AsyncStorage, Image, View } from 'react-native';
import React, { FunctionComponent, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export declare interface AuthLoadingScreen {
    navigation?: any;
}

const GET_USER = gql`
    query getUser {
        getUser {
            id
            lastName
        }
    }
`;

const AuthLoadingScreen: FunctionComponent<AuthLoadingScreen> = ({
    navigation
}) => {
    const [loadUser, { called, loading, data }] = useLazyQuery(GET_USER, {
        onCompleted: data => {
            const { navigate } = navigation;
            console.log(data);
            if (data && data.getUser) navigate('Grower');
            else navigate('Login');
        },
        onError: async onerror => {
            const { navigate } = navigation;
            const token = await AsyncStorage.removeItem('token');

            console.log(onerror);
            navigate('Login');
        }
    });

    useEffect(() => {
        AsyncStorage.getItem('token').then(data => {
            if (!data) return navigation.navigate('Login');
            loadUser();
        });
    }, []);
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Image
                style={{ height: 200, width: 200 }}
                source={require('../../assets/images/icon-terradia.png')}
            />
        </View>
    );
};

export default AuthLoadingScreen;
