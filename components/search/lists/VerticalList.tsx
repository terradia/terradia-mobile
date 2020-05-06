import React, { FunctionComponent, ReactElement } from 'react';
import {
    Animated,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SearchCard from '../../cards/SearchCard';

declare interface VerticalListProps {
    categories: Array<string>;
    title: string;
    ListHeaderComponent: any;
    searchCompanies: any;
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

const VerticalList: FunctionComponent<VerticalListProps> = ({
    categories,
    title,
    ListHeaderComponent,
    searchCompanies
}) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                style={{ flex: 1 }}
                data={categories}
                renderItem={({ item }): ReactElement => (
                    <SearchCard
                        searchCompanies={searchCompanies}
                        width={170}
                        height={130}
                        textBottomPositionPercentage={30}
                        textLeftPosition={15}
                        title={item}
                        containerStyle={{
                            marginTop: 10,
                            marginBottom: 10,
                            flex: 1,
                            alignItems: 'center'
                        }}
                    />
                )}
                // ListHeaderComponent={ListHeaderComponent}
                numColumns={2}
                keyExtractor={(item, index): string => String(index)}
            />
        </View>
    );
};

export default VerticalList;
