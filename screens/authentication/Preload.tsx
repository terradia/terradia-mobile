import React, {
    forwardRef,
    RefForwardingComponent,
    useImperativeHandle,
    useState
} from 'react';
import { AsyncStorage } from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import { CompaniesData } from '@interfaces/Companies';
import getAllCompanies from '../../graphql/getAllCompanies.graphql';
import getUser from '../../graphql/getUser.graphql';
import getActiveAddress from '../../graphql/getActiveAddress.graphql';
import getAddressesByUser from '../../graphql/getAddressesByUser.graphql';
import { useNavigation } from 'react-navigation-hooks';
import { Linking } from 'expo';

export interface MyInputHandles {
    preload(): void;
}

const Preload: RefForwardingComponent<MyInputHandles, any> = forwardRef(
    ({ children }, ref) => {
        const { navigate } = useNavigation();
        const [path, setPath] = useState('');
        const [urlQueryParams, setQueryParams] = useState(null);

        const [loadGrowers, { data: growers }] = useLazyQuery<{
            getAllCompanies: CompaniesData;
        }>(getAllCompanies, {
            fetchPolicy: 'network-only',
            onCompleted: data => {
                if (data && data) {
                    if (path === '') navigate('Grower', { growers: growers });
                    else if (
                        path === 'GrowersProducts' &&
                        urlQueryParams.company
                    ) {
                        navigate('GrowersProducts', {
                            grower: urlQueryParams.company
                        });
                    } else navigate(path);
                } else navigate('Login');
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
        const _loadData = () => {
            Linking.getInitialURL().then(data => {
                const { path, queryParams } = Linking.parse(data);
                setQueryParams({ ...queryParams });
                if (path) setPath(path.replace('--/', ''));
                loadUser();
            });
        };
        useImperativeHandle(ref, () => ({
            preload: (): void => {
                _loadData();
            }
        }));

        return null;
    }
);

export default Preload;
