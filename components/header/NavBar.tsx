import React, { FunctionComponent, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ModalScreenAddress from '../growers/modals/ModalScreenAddress';
import getActiveAddress from '../../graphql/getActiveAddress.graphql';
import { useQuery } from '@apollo/react-hooks';

const NavBar: FunctionComponent = () => {
    const [isModalAddressOpen, setDisplayModalAddress] = useState(false);
    const { data } = useQuery(getActiveAddress, {
        fetchPolicy: 'cache-first'
    });
    return (
        <SafeAreaView>
            <ModalScreenAddress
                isOpen={isModalAddressOpen}
                setDisplayModalAddress={setDisplayModalAddress}
            />
            <TouchableOpacity
                onPress={(): void =>
                    setDisplayModalAddress(!isModalAddressOpen)
                }
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 200
                }}
                activeOpacity={0.7}
            >
                {data && data.getActiveCustomerAddress ? (
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={{
                            color: 'white',
                            backgroundColor: 'transparent',
                            fontWeight: 'bold',
                            fontSize: 18,
                            fontFamily: 'MontserratSemiBold',
                            alignItems: 'center'
                        }}
                    >
                        {data.getActiveCustomerAddress.address}
                    </Text>
                ) : null}
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
