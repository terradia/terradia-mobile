import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import ItemMenuCards from './ItemMenuCards';
import Star from '../../../assets/images/star.svg';
import Cart from '../../../assets/images/cart.svg';
import Receipt from '../../../assets/images/receipt.svg';

const styles = StyleSheet.create({
    menuContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    }
});

const MenuCard: FunctionComponent = () => {
    return (
        <View style={{ marginTop: 21 }}>
            <View style={styles.menuContainers}>
                <ItemMenuCards title={'Mon panier'} icon={<Cart />} />
                <ItemMenuCards title={'Mes recus'} icon={<Receipt />} />
            </View>
            <View style={styles.menuContainers}>
                <ItemMenuCards title={'Mes avis'} icon={<Star />} />
                <ItemMenuCards title={'Promotions'} icon={<Star />} />
            </View>
        </View>
    );
};

export default MenuCard;
