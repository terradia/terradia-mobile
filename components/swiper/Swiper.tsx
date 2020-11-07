import React, { FunctionComponent, useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder } from "react-native";

interface SwiperData {
    width: number;
    height: number;
    borderRadius: number;
}

const Swiper: FunctionComponent<SwiperData> = ({
    width,
    height,
    borderRadius
}) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [isMoving, setIsMoving] = useState(true);
    console.log(width);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => isMoving,
            onMoveShouldSetPanResponder: () => isMoving,
            onPanResponderGrant: () => {
                // console.log();
                pan.setOffset({
                    x: 0,
                    y: 0
                });
            },
            onPanResponderMove: Animated.event([null, { dx: pan.x }], {
                listener: (event, gestureState) => {
                    // console.log(width);
                    // console.log(gestureState.dx);
                    // console.log(isMoving);
                    if (!isMoving) {
                        pan.setValue({ x: width - height, y: 0 });
                        return;
                    }
                    if (gestureState.dx < 0) {
                        console.log("Reset");
                        pan.setValue({ x: 0, y: 0 });
                    }
                    if (gestureState.dx > width - height) {
                        console.log("Set moving to false");
                        setIsMoving(false);
                        pan.setValue({ x: width - height, y: 0 });
                    }
                }
            }),
            onPanResponderRelease: () => {
                if (isMoving) {
                    Animated.spring(
                        pan, // Auto-multiplexed
                        { toValue: { x: 0, y: 0 }, useNativeDriver: true }
                    ).start();
                    pan.flattenOffset();
                } else {
                    pan.setValue({ x: width - height, y: 0 });
                }
            }
        })
    ).current;
    return (
        <View
            style={{
                width: width,
                height: height,
                borderWidth: 2,
                borderColor: "red",
                borderRadius: borderRadius
            }}
        >
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
                        { height: height - 3, width: height, borderRadius }
                    ]}
                />
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
        backgroundColor: "blue"
    }
});

export default Swiper;
