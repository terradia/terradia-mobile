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
                style={{ flex: 1 }}
                data={categories}
                renderItem={({ item }): ReactElement => (
                    <SearchCard
                        width={170}
                        height={170}
                        textBottomPositionPercentage={30}
                        textLeftPosition={15}
                        title={item}
                        containerStyle={{
                            marginTop: 10,
                            marginBottom: 10,
                            flex: 0.5,
                            alignItems: 'center'
                        }}
                    />
                )}
                numColumns={2}
                keyExtractor={(item, index): string => String(index)}
            />
        </View>
    );
};

export default HorizontalList;
