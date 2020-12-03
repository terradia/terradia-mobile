import React, { FunctionComponent, ReactElement } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchCard from "../../cards/SearchCard";
import { CompanyTagData } from "@interfaces/Companies";
import { calcWidth } from "../../../utils/deviceResponsiveHelper";
import { ThemedText } from "@components/theme/Theme";
import HeaderFooter from "@components/header/HeaderFooter";

const minWidth = calcWidth((100 - 8) / 2 - 2);
const maxWidth = calcWidth(92);

declare interface VerticalListProps {
    categories: Array<CompanyTagData>;
    title: string;
    ListHeaderComponent: any;
    searchCompanies: any;
    onScroll: any;
}

const styles = StyleSheet.create({
    title: {
        marginTop: 7,
        fontSize: 25,
        fontFamily: "MontserratBold",
        marginLeft: calcWidth(4)
    }
});

const VerticalList: FunctionComponent<VerticalListProps> = ({
    categories,
    title,
    searchCompanies,
    onScroll
}) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderFooter />
            <ThemedText style={styles.title}>{title}</ThemedText>
            <FlatList
                style={{
                    flex: 1,
                    display: "flex",
                    marginTop: calcWidth(4)
                }}
                contentContainerStyle={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
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
                numColumns={2}
                keyExtractor={(item, index): string => String(index)}
            />
        </View>
    );
};

export default VerticalList;
