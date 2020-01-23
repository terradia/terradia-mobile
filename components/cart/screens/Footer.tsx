import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/Footer.style';
import { Feather } from '@expo/vector-icons';
import i18n from '@i18n/i18n';

declare interface FooterProps {
    setModalOpen: any;
}

const Footer: FunctionComponent<FooterProps> = ({ setModalOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalOpen(true)}
            style={styles.container}
        >
            <View style={{}}>
                <Text style={styles.texts}>{i18n.t('cart.viewCart')}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={[styles.texts, styles.rightText]}>
                    5 {i18n.t('cart.products', { count: 5 })}
                </Text>
                <Feather name="arrow-right" size={24} color="white" />
            </View>
        </TouchableOpacity>
    );
};

export default Footer;
