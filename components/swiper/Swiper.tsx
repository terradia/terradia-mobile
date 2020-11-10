import React, {
    forwardRef,
    FunctionComponent,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState
} from "react";
import { Animated, View, StyleSheet, PanResponder } from "react-native";
import LottieView from "lottie-react-native";

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
    isRequestDone: boolean;
    onAnimationDone: () => void;
}

const Swiper = forwardRef<any, SwiperData>(
    (
        {
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
            borderWidth,
            isRequestDone,
            onAnimationDone
        },
        ref
    ) => {
        const pan = useRef(new Animated.ValueXY()).current;
        const [isMoving, setIsMoving] = useState(true);
        const widthAnim = useRef(new Animated.Value(width)).current;
        const lottieRef = useRef(null);
        const fadeIn = useRef(new Animated.Value(1)).current;
        const loaderFadeIn = useRef(new Animated.Value(0)).current;
        const checkFadeIn = useRef(new Animated.Value(0)).current;
        const textFadeIn = useRef(new Animated.Value(1)).current;

        const createFadeAnimation: any = (
            elem: any,
            duration: number,
            x: number,
            y?: number
        ) => {
            Animated.timing(elem, {
                toValue: y ? { x, y } : x,
                duration,
                useNativeDriver: false
            }).start();
        };

        useImperativeHandle(ref, () => ({
            resetSwiper() {
                createFadeAnimation(widthAnim, 300, width);
                createFadeAnimation(pan, 500, 0, 0);
                createFadeAnimation(loaderFadeIn, 500, 0);
                createFadeAnimation(textFadeIn, 500, 1);
                createFadeAnimation(fadeIn, 500, 1);
                setIsMoving(true);
            }
        }));

        const updateWidth = (): void => {
            createFadeAnimation(pan, 700, 0, 0);
            createFadeAnimation(widthAnim, 700, height);
            createFadeAnimation(fadeIn, 700, 0);
            createFadeAnimation(textFadeIn, 400, 0);
            setTimeout(() => {
                createFadeAnimation(loaderFadeIn, 500, 1);
            }, 1000);
        };

        useEffect(() => {
            if (!isRequestDone) return;
            Animated.sequence([
                Animated.timing(loaderFadeIn, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.timing(checkFadeIn, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: false
                })
            ]).start();
            setTimeout(() => {
                lottieRef.current.play();
            }, 500);
        }, [isRequestDone]);

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
                            if (gestureState.dx > width - height || !isMoving) {
                                setIsMoving(false);
                                pan.setValue({ x: width - height, y: 0 });
                                return;
                            }
                            if (gestureState.dx < 0) {
                                pan.setValue({ x: 0, y: 0 });
                            }
                        }
                    }),
                    onPanResponderRelease: () => {
                        if (isMoving) {
                            Animated.spring(pan, {
                                toValue: { x: 0, y: 0 },
                                useNativeDriver: false
                            }).start();
                            pan.flattenOffset();
                        } else {
                            onSwipeEnd();
                            updateWidth();
                            return;
                        }
                    }
                }),
            [widthAnim, isMoving, lottieRef]
        );
        return (
            <Animated.View
                style={{
                    width: widthAnim,
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
                        paddingLeft: height,
                        opacity: textFadeIn
                    }}
                >
                    {text}
                </Animated.View>
                {!isMoving && (
                    <Animated.View
                        style={{
                            width: height,
                            height: height,
                            position: "absolute",
                            flex: 1,
                            zIndex: 2,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Animated.View
                            style={{
                                opacity: checkFadeIn,
                                position: "absolute"
                            }}
                        >
                            <LottieView
                                style={{
                                    width: height - 5,
                                    height: height - 5,
                                    top: -1,
                                    left: -1
                                }}
                                ref={lottieRef}
                                autoPlay={false}
                                onAnimationFinish={onAnimationDone}
                                resizeMode="cover"
                                loop={false}
                                source={require("../../assets/json/lf30_editor_8kzopal0.json")}
                            />
                        </Animated.View>
                        <Animated.View
                            style={{
                                opacity: loaderFadeIn,
                                position: "absolute"
                            }}
                        >
                            <LottieView
                                style={{
                                    width: height,
                                    height: height,
                                    top: -0.6,
                                    left: -0.6
                                }}
                                autoPlay={true}
                                loop={true}
                                source={require("../../assets/json/loader.json")}
                            />
                        </Animated.View>
                    </Animated.View>
                )}
                <Animated.View
                    style={{
                        height: 20,
                        transform: [{ translateX: pan.x }],
                        zIndex: 1
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
                        <Animated.View style={{ opacity: fadeIn }}>
                            {icon}
                        </Animated.View>
                    </View>
                </Animated.View>
            </Animated.View>
        );
    }
);

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
