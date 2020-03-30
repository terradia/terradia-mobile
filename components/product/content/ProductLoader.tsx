import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ProductLoader: FunctionComponent = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{ flexDirection: 'row', backgroundColor: '#F3F3F3' }}>
                <View style={{ flexGrow: 4 }}>
                    <View
                        style={{
                            width: 100,
                            height: 20,
                            marginTop: 20,
                            marginBottom: 20,
                            marginLeft: 20,
                            borderRadius: 10
                        }}
                    />
                    <View
                        style={{
                            width: 100,
                            height: 15,
                            marginLeft: 120,
                            marginBottom: 10
                        }}
                    />
                    <View style={{ width: 100, height: 15, marginLeft: 120 }} />
                </View>
                <View style={{ flexDirection: 'row', flexGrow: 10 }}>
                    <View
                        style={{
                            width: 100,
                            height: 100,
                            marginLeft: 10,
                            marginBottom: 20,
                            borderRadius: 10
                        }}
                    />
                </View>
            </View>
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

export default ProductLoader;
