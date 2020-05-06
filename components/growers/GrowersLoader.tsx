import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        justifyContent: 'center',
        marginLeft: 20
    },
    box: {
        width: '90%',
        height: 140,
        marginBottom: 20,
        marginLeft: 5,
        borderRadius: 10
    }
});

const GrowersLoader: FunctionComponent = () => {
    return (
        <SkeletonPlaceholder>
            <View style={styles.container}>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
            </View>
        </SkeletonPlaceholder>
    );
};

export default GrowersLoader;
