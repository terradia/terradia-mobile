import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import InputTerradia from '../input/InputTerradia';
import { Animated, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import layout from '@constants/Layout';
import { LinearGradient } from 'expo-linear-gradient';

declare interface SearchInputProps {
    value: string;
    setValue: (string) => void;
    searchCompanies: any;
    setDisplayCompanies: (boolean) => void;
    listY: number;
    canDisplayCompanies: boolean;
}

const MAX_WIDTH = layout.window.width - 20;
const ANIMATED_WIDTH = layout.window.width - 100;

const SearchInput: FunctionComponent<SearchInputProps> = ({
    value,
    setValue,
    searchCompanies,
    setDisplayCompanies,
    listY,
    canDisplayCompanies
}) => {
    const widthAnim = useRef(new Animated.Value(MAX_WIDTH)).current;
    const scrollY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        if (value.length === 0) {
            scrollY.setValue(listY);
        }
    }, [listY]);
    const [isAnimated, setAnimated] = useState(false);

    useEffect(() => {
        if (canDisplayCompanies) {
            scrollY.setValue(300);
        }
    }, [canDisplayCompanies]);

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
        <Animated.View
            style={{
                height: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [150, 100],
                    extrapolate: 'clamp'
                })
            }}
        >
            <LinearGradient
                style={{ flex: 1 }}
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
                        alignItems: 'center',
                        flex: 1
                    }}
                >
                    <Animated.View
                        style={{
                            width: widthAnim,
                            height: scrollY.interpolate({
                                inputRange: [0, 150],
                                outputRange: [70, 50],
                                extrapolate: 'clamp'
                            })
                        }}
                    >
                        <InputTerradia
                            containerStyle={{ height: '100%' }}
                            style={{ height: 40 }}
                            onChangeText={(value): void => setValue(value)}
                            value={value}
                            onSubmitEditing={(): void => {
                                if (value.length === 0) return;
                                scrollY.setValue(300);
                                setDisplayCompanies(true);
                                searchCompanies({
                                    variables: { query: value.trim() }
                                });
                            }}
                        />
                    </Animated.View>
                    <TouchableOpacity
                        onPress={(): void => {
                            scrollY.setValue(0);
                            setValue('');
                        }}
                    >
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
        </Animated.View>
    );
};

export default SearchInput;
