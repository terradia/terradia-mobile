import React, { FunctionComponent, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import ModalScreenAddress from '../growers/modals/ModalScreenAddress';

declare interface NavBarProps {
    title: string;
}

const NavBar: FunctionComponent<NavBarProps> = ({ title }) => {
    const { navigate } = useNavigation();
    const [isModalAddressOpen, setDisplayModalAddress] = useState(true);
    return (
        <SafeAreaView>
            <ModalScreenAddress
                isOpen={isModalAddressOpen}
                setDisplayModalAddress={setDisplayModalAddress}
            />
            <TouchableOpacity
                onPress={() => setDisplayModalAddress(!isModalAddressOpen)}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                activeOpacity={0.7}
            >
                <Text
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent',
                        fontWeight: 'bold',
                        fontSize: 18,
                        fontFamily: 'MontserratSemiBold',
                        alignItems: 'center'
                    }}
                >
                    {title}
                </Text>
                <Feather
                    style={{ margin: 3 }}
                    name="chevron-down"
                    size={26}
                    color="white"
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default NavBar;
