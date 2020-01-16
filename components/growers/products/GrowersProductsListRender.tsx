import React, { FunctionComponent } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles/GrowersProductsListRender.style';

export const renderHeaders: FunctionComponent<string> = (value: string) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>
                {value.toUpperCase()}
            </Text>
        </View>
    );
};

export const renderItems: FunctionComponent<any> = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.textsContainer}>
                    <View style={styles.spacer}>
                        <Text style={[styles.textsColor, styles.productTitle]}>
                            Ambrée St Guillaume
                        </Text>
                    </View>
                    <View style={styles.spacer}>
                        <Text
                            style={[
                                styles.textsColor,
                                styles.productDescription
                            ]}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt, incididunt,
                            incididunt
                        </Text>
                    </View>
                    <View style={[styles.priceContainer, styles.spacer]}>
                        <View />
                        <View>
                            <Text style={[styles.priceTag, styles.textsColor]}>
                                4.5€
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `http://www.aubrasseur.fr/wp-content/uploads/2014/04/20140311-911-Modifier-003.jpg`,
                            height: 100,
                            width: 100
                        }}
                    />
                </View>
            </View>
        </View>
    );
};
