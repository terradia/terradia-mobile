import React, { FunctionComponent } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import i18n from '@i18n/i18n';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigationState } from 'react-navigation-hooks';

declare interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = ({}) => {
    return (
        <SafeAreaView>
            <Text
                style={{
                    color: 'white',
                    backgroundColor: 'transparent',
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginLeft: 30,
                    fontFamily: 'MontserratSemiBold',
                    alignItems: 'center'
                }}
            >
                {i18n.t('growerScreen.growers')}
            </Text>
        </SafeAreaView>
    );
};

export default NavBar;
