import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/Footer.style';
import { Feather } from '@expo/vector-icons';
import i18n from '@i18n/i18n';
import { useQuery } from '@apollo/react-hooks';
import getCart from '../../../graphql/cart/getCart.graphql';
import { useNavigation } from 'react-navigation-hooks';


const Footer: FunctionComponent = () => {
    const { data } = useQuery(getCart);
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={(): boolean => navigate('Cart')}
            style={styles.container}
        >
            <View style={{}}>
                <Text style={styles.texts}>{i18n.t('cart.viewCart')}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={[styles.texts, styles.rightText]}>
                    {data.getCart.products.length}{' '}
                    {i18n.t('cart.products', {
                        count: data.getCart.products.length
                    })}
                </Text>
                <Feather name="arrow-right" size={24} color="white" />
            </View>
        </TouchableOpacity>
    );
};

export default Footer;
