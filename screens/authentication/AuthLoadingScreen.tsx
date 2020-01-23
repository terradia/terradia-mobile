import { AsyncStorage, Image, View } from 'react-native';
import React, { FunctionComponent, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CompaniesData } from '@interfaces/Companies';

declare interface AuthLoadingScreen {
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

const GET_COMPANIES = gql`
    query allCompanies {
        getAllCompanies {
            name
            averageMark
            numberOfMarks
            description
            productsCategories {
                name
                products {
                    name
                    id
                    description
                }
            }
            products {
                name
                id
                description
            }
        }
    }
`;

const AuthLoadingScreen: FunctionComponent<AuthLoadingScreen> = ({
    navigation
}) => {
    const [loadGrowers, { data: growers }] = useLazyQuery<CompaniesData, any>(
        GET_COMPANIES,
        {
            onCompleted: data => {
                const { navigate } = navigation;
                if (data && data) navigate('Grower', { growers: data });
                else navigate('Login');
            },
            onError: async onerror => {
                const { navigate } = navigation;
                const token = await AsyncStorage.removeItem('token');

                navigate('Login');
            }
        }
    );

    const [loadUser, { called, loading, data }] = useLazyQuery(GET_USER, {
        onCompleted: data => {
            const { navigate } = navigation;
            if (data && data.getUser) loadGrowers();
            else navigate('Login');
        },
        onError: async onerror => {
            const { navigate } = navigation;
            const token = await AsyncStorage.removeItem('token');

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
