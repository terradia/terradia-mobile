import React, {
    forwardRef,
    RefForwardingComponent,
    useImperativeHandle
} from 'react';
import { AsyncStorage } from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import { CompaniesData } from '@interfaces/Companies';
import getAllCompanies from '../../graphql/getAllCompanies.graphql';
import getUser from '../../graphql/getUser.graphql';
import getActiveAddress from '../../graphql/getActiveAddress.graphql';
import getAddressesByUser from '../../graphql/getAddressesByUser.graphql';
import { useNavigation } from 'react-navigation-hooks';

export interface MyInputHandles {
    preload(): void;
}

const Preload: RefForwardingComponent<MyInputHandles, any> = forwardRef(
    ({ children }, ref) => {
        const { navigate } = useNavigation();

        const [loadGrowers, { data: growers }] = useLazyQuery<{
            getAllCompanies: CompaniesData;
        }>(getAllCompanies, {
            onCompleted: data => {
                if (data && data) navigate('Grower', { growers: growers });
                else navigate('Login');
            },
            onError: async () => {
                await AsyncStorage.removeItem('token');
                navigate('Login');
            }
        });
        const [loadUser, { client }] = useLazyQuery(getUser, {
            onCompleted: data => {
                if (data && data.getUser) {
                    client.query({ query: getActiveAddress });
                    client.query({ query: getAddressesByUser });
                    loadGrowers();
                } else navigate('Login');
            },
            onError: async onerror => {
                await AsyncStorage.removeItem('token');
                navigate('Login');
            }
        });
        useImperativeHandle(ref, () => ({
            preload: (): void => {
                loadUser();
            }
        }));

        return null;
    }
);

export default Preload;
