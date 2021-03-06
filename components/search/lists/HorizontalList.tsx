import React, { FunctionComponent, ReactElement } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import SearchCard from '../../cards/SearchCard';

declare interface HorizontalListProps {
    categories: Array<string>;
    title: string;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: 'MontserratBold',
        color: '#575757',
        marginTop: 10,
        marginLeft: 10
    }
});

const HorizontalList: FunctionComponent<HorizontalListProps> = ({
    categories,
    title
}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
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
        </View>
    );
};

export default HorizontalList;
