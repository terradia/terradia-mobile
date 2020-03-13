import React, { FunctionComponent } from 'react';
import { Header } from 'react-native-elements';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderCenter from './HeaderCenter';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

declare interface HeaderProfileProps {
    title: string;
}

const HeaderProfile: FunctionComponent<HeaderProfileProps> = ({ title }) => {
    return (
        <LinearGradient
            style={{ height: 120 }}
            colors={['#8FDD3D', '#5CC04A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <Header
                placement="left"
                backgroundColor={'transparent'}
                containerStyle={{ height: 100, borderBottomWidth: 0 }}
                leftComponent={<HeaderLeft />}
                centerComponent={<HeaderCenter title={title} />}
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
