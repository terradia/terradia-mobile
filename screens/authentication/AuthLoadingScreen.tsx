import { AsyncStorage, Image, View } from 'react-native';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { CompaniesData } from '@interfaces/Companies';
import getAllCompanies from '../../graphql/getAllCompanies.graphql';
import getUser from '../../graphql/getUser.graphql';
import getActiveAddress from '../../graphql/getActiveAddress.graphql';
import getAddressesByUser from '../../graphql/getAddressesByUser.graphql';
import Preload from './Preload';

declare interface AuthLoadingScreen {
    navigation?: any;
}

const AuthLoadingScreen: FunctionComponent<AuthLoadingScreen> = ({
    navigation
}) => {
    const preloadRef = useRef(null);

    useEffect(() => {
        AsyncStorage.getItem('token').then(data => {
            if (!data) return navigation.navigate('Login');
            preloadRef.current.preload();
        });
    }, []);
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Preload ref={preloadRef} />
            <Image
                style={{ height: 200, width: 200 }}
                source={require('../../assets/images/icon-terradia.png')}
            />
        </View>
    );
};

export default AuthLoadingScreen;
