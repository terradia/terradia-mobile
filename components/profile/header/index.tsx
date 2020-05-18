import React, { FunctionComponent } from 'react';
import { Header } from 'react-native-elements';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, View } from 'react-native';

const HeaderProfile: FunctionComponent<any> = () => {
    return (
        <LinearGradient
            style={{ height: Platform.OS === 'ios' ? 120 : 90 }}
            colors={['#8FDD3D', '#5CC04A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <Header
                placement="left"
                backgroundColor={'transparent'}
                containerStyle={{
                    height: Platform.OS === 'ios' ? 100 : 70,
                    borderBottomWidth: 0
                }}
                leftComponent={<HeaderLeft />}
                rightComponent={<HeaderRight />}
            />
            <View
                style={{
                    width: '100%',
                    backgroundColor: 'rgb(242, 242, 242)',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 20
                }}
            />
        </LinearGradient>
    );
};

export default HeaderProfile;
