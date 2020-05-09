import React, {
    forwardRef,
    useImperativeHandle,
    useState
} from 'react';
import { AsyncStorage } from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import getUser from '../../graphql/getUser.graphql';
import getActiveAddress from '../../graphql/getActiveAddress.graphql';
import getAddressesByUser from '../../graphql/getAddressesByUser.graphql';
import getCompaniesByDistanceByCustomer from '../../graphql/getCompaniesByDistanceByCustomer.graphql';

import { useNavigation } from 'react-navigation-hooks';
import { Linking } from 'expo';

export interface MyInputHandles {
    preload(): void;
}

const Preload: React.ForwardRefExoticComponent<React.PropsWithoutRef<{
    children?: any;
}> &
    React.RefAttributes<any>> = forwardRef(({ children }, ref) => {
    const { navigate } = useNavigation();
    const [path, setPath] = useState('');
    const [urlQueryParams, setQueryParams] = useState(null);

    const _redirect = () => {
        if (path === '') navigate('Grower');
        else if (path === 'GrowersProducts' && urlQueryParams.company) {
            navigate('GrowersProducts', {
                grower: urlQueryParams.company
            });
        } else navigate(path);
    };

    // const [loadGrowers, { data: growers }] = useLazyQuery<{
    //     getAllCompanies: CompaniesData;
    // }>(getAllCompanies, {
    //     fetchPolicy: 'network-only',
    //     onCompleted: data => {
    //         if (data && data) {
    //             _redirect();
    //         } else navigate('Login');
    //     },
    //     onError: async error => {
    //         await AsyncStorage.removeItem('token');
    //         navigate('Login');
    //     }
    // });
    const [loadUser, { client }] = useLazyQuery(getUser, {
        fetchPolicy: 'network-only',
        onCompleted: data => {
            if (data && data.getUser) {
                client.query({ query: getActiveAddress });
                client.query({ query: getAddressesByUser });
                client.query({ query: getCompaniesByDistanceByCustomer });
                _redirect();
                // loadGrowers();
            } else navigate('Login');
        },
        onError: async onerror => {
            console.log(onerror);
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
});

export default Preload;
