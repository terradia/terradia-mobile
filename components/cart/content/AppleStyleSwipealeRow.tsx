import React, { Component } from 'react';
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
        padding: 10
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

export default class AppleStyleSwipeableRow extends Component {
    renderRightAction = (text, color, x, progress) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0]
        });
        const pressHandler = () => {
            this.close();
            alert(text);
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
    renderRightActions = progress => (
        <View
            style={{
                width: 120,
                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
            }}
        >
            {this.renderRightAction('More', '#FF4A4A', 150, progress)}
        </View>
    );
    updateRef = ref => {
        this._swipeableRow = ref;
    };
    close = () => {
        this._swipeableRow.close();
    };
    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                rightThreshold={40}
                renderRightActions={this.renderRightActions}
            >
                {children}
            </Swipeable>
        );
    }
}

