import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Header from '@components/profile/header';
import PremiumCard from '@components/profile/card/PremiumCard';
import MenuCard from '@components/profile/card/MenuCards';

const ProfileScreen: FunctionComponent<any> = () => {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    return (
        <View>
            <Header />
            <View style={{ paddingLeft: 20, paddingRight: 20}}>
                <PremiumCard/>
                <MenuCard />
            </View>
        </View>
    );
};

export default ProfileScreen;
