import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Header from '@components/profile/header';
import PremiumCard from '@components/profile/card/PremiumCard';
import MenuCard from '@components/profile/card/MenuCards';
import Cart from '@components/cart';

const ProfileScreen: FunctionComponent<any> = () => {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    return (
        <View style={{flex: 1}}>
            <Header />
            <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>
                <PremiumCard />
                <MenuCard />
            </View>
            <Cart />
        </View>
    );
};

export default ProfileScreen;
