import React, { FunctionComponent, ReactElement } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ImageOpacity from '../../images/ImageOpacity';
import SearchCard from '../../cards/SearchCard';

declare interface HorizontalListProps {
    categories: Array<string>;
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: 130,
        width: 130,
        opacity: 2
    },
    container: {
        margin: 10,
        position: 'relative'
    },
    name: {
        position: 'absolute',
        bottom: 25,
        left: 6,
        color: 'white',
        fontFamily: 'MontserratSemiBold',
        fontSize: 16
    }
});

const HorizontalList: FunctionComponent<HorizontalListProps> = ({
    categories
}) => {
    const renderItem = ({ item }): ReactElement => (
        <View style={styles.container}>
            <ImageOpacity
                style={styles.backgroundImage}
                source={{
                    uri:
                        'https://avis-vin.lefigaro.fr/var/img/154/38484-650x330-istock-877043770.jpg'
                }}
                borderRadius={20}
            />
            <Text style={styles.name}>Viticulteurs</Text>
        </View>
    );

    return (
        <FlatList
            data={categories}
            renderItem={({ item }) => (
                <SearchCard
                    width={130}
                    height={130}
                    textBottomPositionPercentage={30}
                    textLeftPosition={6}
                    title={item}
                    containerStyle={{ margin: 10 }}
                />
            )}
            horizontal={true}
        />
    );
};

export default HorizontalList;
