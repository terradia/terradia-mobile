import React, { FunctionComponent } from 'react';
import styles from './styles/Header.style';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
// @ts-ignore
import i18n from '@i18n/i18n';

declare interface HeaderCartProps {
    setModalOpen: any;
}

const HeaderCart: FunctionComponent<HeaderCartProps> = ({ setModalOpen }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={(): void => setModalOpen(false)}>
                <Feather name="x" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{i18n.t('cart.viewCart')}</Text>
            <View />
        </View>
    );
};

export default HeaderCart;
