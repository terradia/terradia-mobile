import React, { FunctionComponent, useMemo, useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder } from "react-native";

interface SwiperData {
    width: number;
    height: number;
    borderRadius: number;
    onSwipeEnd: () => void;
    icon: any;
    text: any;
    enabled: boolean;
    borderColor: string;
    disabledColor: string;
    swiperColor: string;
    backgroundColor: string;
    borderWidth: number;
}

const Swiper: FunctionComponent<SwiperData> = ({
    width,
    height,
    borderRadius,
    onSwipeEnd,
    icon,
    text,
    enabled,
    borderColor,
    disabledColor,
    swiperColor,
    backgroundColor,
    borderWidth
}) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [isMoving, setIsMoving] = useState(true);

    const panResponder = useMemo(
        () =>
            PanResponder.create({
                onStartShouldSetPanResponder: (evt, gestureState) =>
                    isMoving && enabled,
                onMoveShouldSetPanResponder: () => isMoving && enabled,
                onPanResponderGrant: () => {
                    pan.setOffset({
                        x: 0,
                        y: 0
                    });
                },
                onPanResponderMove: Animated.event([null, { dx: pan.x }], {
                    useNativeDriver: false,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    listener: (event, gestureState) => {
                        if (!isMoving) {
                            pan.setValue({ x: width - height, y: 0 });
                            return;
                        }
                        if (gestureState.dx < 0) {
                            pan.setValue({ x: 0, y: 0 });
                        }
                        if (gestureState.dx > width - height) {
                            onSwipeEnd();
                            setIsMoving(false);
                            pan.setValue({ x: width - height, y: 0 });
                        }
                    }
                }),
                onPanResponderRelease: () => {
                    if (isMoving) {
                        Animated.spring(pan, {
                            toValue: { x: 0, y: 0 },
                            useNativeDriver: true
                        }).start();
                        pan.flattenOffset();
                    } else {
                        pan.setValue({ x: width - height, y: 0 });
                    }
                }
            }),
        [isMoving]
    );
    return (
        <View
            style={{
                width: width,
                height: height,
                borderWidth,
                borderColor: enabled ? borderColor : disabledColor,
                borderRadius: borderRadius,
                backgroundColor
            }}
        >
            <Animated.View
                style={{
                    position: "absolute",
                    alignSelf: "center",
                    flex: 1,
                    height: "100%",
                    justifyContent: "center",
                    paddingLeft: height
                }}
            >
                {text}
            </Animated.View>
            <Animated.View
                style={{
                    height: 20,
                    transform: [{ translateX: pan.x }]
                }}
                {...panResponder.panHandlers}
            >
                <View
                    style={[
                        styles.box,
                        {
                            height: height - 2,
                            width: height,
                            borderRadius,
                            top: -1,
                            backgroundColor: enabled
                                ? swiperColor
                                : disabledColor
                        }
                    ]}
                >
                    {icon}
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Swiper;
