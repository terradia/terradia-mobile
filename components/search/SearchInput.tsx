import React, { FunctionComponent, useState } from 'react';
import InputTerradia from '../input/InputTerradia';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SearchInput: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <LinearGradient
            style={{ flex: 1, height: 90 }}
            colors={['#8FDD3D', '#5CC04A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <View
                style={{
                    backgroundColor: 'white',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                }}
            >
                <View style={{ margin: 10 }}>
                    <InputTerradia
                        style={{ width: '100%', height: 25 }}
                        onChangeText={(value): void => setValue(value)}
                        value={value}
                    />
                </View>
            </View>
        </LinearGradient>
    );
};

export default SearchInput;
