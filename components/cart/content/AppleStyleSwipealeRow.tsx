import React, {
    Component,
    forwardRef,
    FunctionComponent,
    RefForwardingComponent,
    useImperativeHandle,
    useRef
} from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

/**
 * From https://github.com/software-mansion/react-native-gesture-handler/blob/6fc5e07ccd5027b090c17c59e0971ee32f559991/Example/swipeable/AppleStyleSwipeableRow.js#L8
 */

const styles = StyleSheet.create({
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
        fontFamily: 'MontserratBold'
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

interface AppleStyleSwipeableRowProps {
    close: any;
    ref: React.Ref<HTMLDivElement>;
    setCurrentOpen: any;
    id: number;
}
export interface MyInputHandles {
    close(): void;
}
const AppleStyleSwipeableRow: RefForwardingComponent<
    MyInputHandles,
    AppleStyleSwipeableRowProps
> = forwardRef(({ children, setCurrentOpen, id }, ref) => {
    const refSwipeableRow = useRef(null);

    useImperativeHandle(ref, () => ({
        close: () => {
            refSwipeableRow.current.close();
        }
    }));
    const renderRightAction = (text, color, x, progress) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0]
        });
        const close = () => {
            refSwipeableRow.current.close();
        };
        const pressHandler = () => {
            // close();
            // alert(text);
        };

        return (
            <Animated.View
                style={{ flex: 1, transform: [{ translateX: trans }] }}
            >
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}
                >
                    <Text style={styles.actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };
    const renderRightActions = progress => (
        <View
            style={{
                width: 120,
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
            }}
        >
            {renderRightAction('Supprimer', '#FF4A4A', 150, progress)}
        </View>
    );

    return (
        <Swipeable
            onSwipeableWillOpen={() => setCurrentOpen(id)}
            ref={refSwipeableRow}
            friction={2}
            rightThreshold={40}
            renderRightActions={renderRightActions}
            renderLeftActions={renderRightActions}
        >
            {children}
        </Swipeable>
    );
});

export default AppleStyleSwipeableRow;
