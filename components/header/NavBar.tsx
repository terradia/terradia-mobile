import React, { FunctionComponent } from 'react';
import { Text, SafeAreaView } from 'react-native';

declare interface NavBarProps {
    title: string;
}

const NavBar: FunctionComponent<NavBarProps> = ({ title }) => {
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
                {title}
            </Text>
        </SafeAreaView>
    );
};

export default NavBar;
