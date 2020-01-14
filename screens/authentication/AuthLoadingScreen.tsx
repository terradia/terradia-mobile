import { AsyncStorage, Image, View } from 'react-native';
import React, { useEffect } from 'react';
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

const AuthLoadingScreen = (props: AuthLoadingScreen) => {
    const [loadUser, { called, loading, data }] = useLazyQuery(GET_USER, {
        onCompleted: data => {
            const { navigate } = props.navigation;
            console.log(data);
            if (data && data.getUser) navigate('Grower');
            else navigate('Login');
        },
        onError: async onerror => {
            const { navigate } = props.navigation;
            const token = await AsyncStorage.removeItem('token');

            console.log(onerror);
            navigate('Login');
        }
    });

    useEffect(() => {
        AsyncStorage.getItem('token').then(data => {
            console.log(data);
            if (!data) return props.navigation.navigate('Login');
            console.log('Ready to call load user');
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
