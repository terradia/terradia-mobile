import React, { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import * as Linking from 'expo-linking';
import { useNavigation } from 'react-navigation-hooks';

const DeepLinking: FunctionComponent = () => {
    const { navigate } = useNavigation();
    const _handleNewRoute = data => {
        let { path, queryParams } = Linking.parse(data.url);
        path = path.replace('--/', '');
        if (path === 'GrowersProducts' && queryParams.company) {
            navigate('GrowersProducts', {
                grower: queryParams.company
            });
        } else navigate(path);
    };

    useEffect(() => {
        Linking.addEventListener('url', _handleNewRoute);
    }, []);

    return <View />;
};

export default DeepLinking;
