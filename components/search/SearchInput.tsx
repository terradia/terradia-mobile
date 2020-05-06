import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import InputTerradia from '../input/InputTerradia';
import {
    Animated,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import layout from '@constants/Layout';
import { colors } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

declare interface SearchInputProps {
    value: string;
    setValue: (string) => void;
    searchCompanies: any;
    setDisplayCompanies: (boolean) => void;
}

const MAX_WIDTH = layout.window.width - 20;
const ANIMATED_WIDTH = layout.window.width - 100;
const SearchInput: FunctionComponent<SearchInputProps> = ({
    value,
    setValue,
    searchCompanies,
    setDisplayCompanies
}) => {
    const widthAnim = useRef(new Animated.Value(MAX_WIDTH)).current;
    const [isAnimated, setAnimated] = useState(false);
    useEffect(() => {
        if (value.length > 0 && !isAnimated) {
            setAnimated(true);
            Animated.timing(widthAnim, {
                toValue: ANIMATED_WIDTH,
                duration: 150
            }).start();
        } else if (value.length === 0 && isAnimated) {
            setDisplayCompanies(false);
            setAnimated(false);
            Animated.timing(widthAnim, {
                toValue: MAX_WIDTH,
                duration: 150
            }).start();
        }
    }, [value]);
    return (
        <LinearGradient
            style={{ height: 100 }}
            colors={['#8FDD3D', '#5CC04A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <SafeAreaView
                style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    margin: 10,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Animated.View style={{ width: widthAnim }}>
                    <InputTerradia
                        style={{ height: 25 }}
                        onChangeText={(value): void => setValue(value)}
                        value={value}
                        onSubmitEditing={() => {
                            if (value.length === 0) return;
                            setDisplayCompanies(true);
                            searchCompanies({
                                variables: { query: value.trim() }
                            });
                        }}
                    />
                </Animated.View>
                <TouchableOpacity onPress={(): void => setValue('')}>
                    <Text
                        style={{
                            fontFamily: 'MontserratSemiBold',
                            color: '#575757',
                            marginLeft: 20,
                            fontSize: 16
                        }}
                    >
                        Cancel
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default SearchInput;
