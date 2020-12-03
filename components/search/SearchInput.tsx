import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import InputTerradia from "../input/InputTerradia";
import {
    Animated,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Platform
} from "react-native";
import layout from "@constants/Layout";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "@i18n/i18n";
import { calcWidth } from '../../utils/deviceResponsiveHelper';

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
                duration: 150,
                useNativeDriver: false
            }).start();
        } else if (value.length === 0 && isAnimated) {
            setDisplayCompanies(false);
            setAnimated(false);
            Animated.timing(widthAnim, {
                toValue: MAX_WIDTH,
                duration: 150,
                useNativeDriver: false
            }).start();
        }
    }, [value]);

    return (
        <LinearGradient
            style={{ height: 110 }}
            colors={["#8FDD3D", "#5CC04A"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        >
            <SafeAreaView
                style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    margin: calcWidth(4),
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1
                }}
            >
                <Animated.View
                    style={{
                        width: calcWidth(92),
                        height: 50
                    }}
                >
                    <InputTerradia
                        containerStyle={{ height: "100%" }}
                        style={{ height: 40 }}
                        onChangeText={(value): void => setValue(value)}
                        value={value}
                        autoCorrect={false}
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
                        setValue("");
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "MontserratSemiBold",
                            color: "#575757",
                            margin: 15,
                            fontSize: 16
                        }}
                    >
                        {i18n.t("searchScreen.cancel")}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default SearchInput;
