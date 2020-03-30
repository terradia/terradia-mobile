import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const FeedBackLoader: FunctionComponent = () => {
    return (
        <SkeletonPlaceholder>
            <View>
                <View
                    style={{
                        width: 200,
                        height: 20,
                        marginTop: 20,
                        marginBottom: 10,
                        marginLeft: 20,
                        borderRadius: 10
                    }}
                />
                <View
                    style={{
                        width: '80%',
                        height: 100,
                        marginBottom: 20,
                        marginLeft: 20,
                        borderRadius: 10
                    }}
                />
            </View>
            <View>
                <View
                    style={{
                        width: 200,
                        height: 20,
                        marginBottom: 10,
                        marginLeft: 20,
                        borderRadius: 10
                    }}
                />
                <View
                    style={{
                        width: '80%',
                        height: 80,
                        marginBottom: 20,
                        marginLeft: 20,
                        borderRadius: 10
                    }}
                />
            </View>
        </SkeletonPlaceholder>
    );
};

export default FeedBackLoader;
