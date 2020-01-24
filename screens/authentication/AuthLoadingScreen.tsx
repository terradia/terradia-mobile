import { AsyncStorage, Image, View } from 'react-native';
import React, { FunctionComponent, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { CompaniesData } from '@interfaces/Companies';
import getAllCompanies from '../../graphql/getAllCompanies.graphql';
import getUser from '../../graphql/getUser.graphql';
import getActiveAddress from '../../graphql/getActiveAddress.graphql';
import getAddressesByUser from '../../graphql/getAddressesByUser.graphql';

declare interface AuthLoadingScreen {
    navigation?: any;
}

const AuthLoadingScreen: FunctionComponent<AuthLoadingScreen> = ({
    navigation
}) => {
    const [loadGrowers, { data: growers }] = useLazyQuery<{
        getAllCompanies: CompaniesData;
    }>(getAllCompanies, {
        onCompleted: data => {
            const { navigate } = navigation;
            if (data && data) navigate('Grower', { growers: growers });
            else navigate('Login');
        },
        onError: async onerror => {
            const { navigate } = navigation;
            const token = await AsyncStorage.removeItem('token');

            navigate('Login');
        }
    });
    const [loadUserAddresses] = useLazyQuery<{
        getAddressesByUser;
    }>(getAddressesByUser, {
        onCompleted: data => {
            loadGrowers();
        }
    });
    const [loadAddress] = useLazyQuery<{
        getActiveAddress;
    }>(getActiveAddress, {
        onCompleted: data => {
            loadUserAddresses();
        }
    });

    const [loadUser, { called, loading, data }] = useLazyQuery(getUser, {
        onCompleted: data => {
            const { navigate } = navigation;
            if (data && data.getUser) {
                loadAddress();
            } else navigate('Login');
        },
        onError: async onerror => {
            const { navigate } = navigation;
            await AsyncStorage.removeItem('token');
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
