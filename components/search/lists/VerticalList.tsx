import React, { FunctionComponent, ReactElement } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import SearchCard from "../../cards/SearchCard";
import { CompanyTagData } from "@interfaces/Companies";

const minWidth = 170;
const maxWidth = minWidth * 2 + 20;

declare interface VerticalListProps {
    categories: Array<CompanyTagData>;
    title: string;
    ListHeaderComponent: any;
    searchCompanies: any;
    onScroll: any;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: "MontserratBold",
        color: "#575757",
        marginTop: 10,
        marginLeft: 10
    }
});

const VerticalList: FunctionComponent<VerticalListProps> = ({
    categories,
    title,
    ListHeaderComponent,
    searchCompanies,
    onScroll
}) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                style={{ flex: 1 }}
                data={categories}
                onScroll={onScroll}
                renderItem={({ item, index }): ReactElement => (
                    <SearchCard
                        searchCompanies={searchCompanies}
                        width={
                            index === categories.length - 1
                                ? categories.length * 2 === 0
                                    ? minWidth
                                    : maxWidth
                                : minWidth
                        }
                        height={130}
                        textBottomPositionPercentage={30}
                        textLeftPosition={20}
                        title={item.slugName}
                        containerStyle={{
                            marginTop: 10,
                            marginBottom: 10,
                            flex: 1,
                            alignItems: "center"
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
