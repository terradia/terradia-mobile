import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Animated, FlatList, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchInput from '@components/search/SearchInput';
import { withCollapsible } from 'react-navigation-collapsible';
import HorizontalList from '@components/search/lists/HorizontalList';
import Cart from '@components/cart';
import VerticalList from '@components/search/lists/VerticalList';
import DeepLinking from '@components/routing/DeepLinking';
import searchCompanies from '../../graphql/search/searchCompanies.graphql';
import { useLazyQuery } from '@apollo/react-hooks';
import GrowerCard from '@components/cards/GrowerCard';
import { NavigationParams } from 'react-navigation';
import { CompanyData } from '@interfaces/Companies';
import Spinner from 'react-native-loading-spinner-overlay';
import GrowersLoader from '@components/growers/GrowersLoader';

declare interface SearchScreenProps {
    collapsible: any;
    navigation?: NavigationParams;
}

const DATA = [
    'Nak',
    'Far',
    'Go',
    'Stre',
    'Maraicher',
    'Viticulteurs',
    'Glaciers',
    'Boucherie',
    'Apiculteurs',
    'Maraicher',
    'Viticulteurs',
    'Glaciers',
    'Boucherie',
    'Apiculteurs',
    'Maraicher'
];

const SearchScreen: FunctionComponent<SearchScreenProps> = ({
    collapsible,
    navigation
}) => {
    const [value, setValue] = useState('');
    const [SearchCompanies, { data: companies, loading }] = useLazyQuery(
        searchCompanies
    );
    const [canDisplayCompanies, setDisplayCompanies] = useState(false);

    const _onCategoryClicked = category => {
        setValue(category);
        setDisplayCompanies(true);
        SearchCompanies({ variables: { query: category } });
    };

    const _renderItem = () => {
        return (
            <View>
                <HorizontalList
                    categories={DATA}
                    title={'Nos produits préférés'}
                />
                <HorizontalList
                    categories={DATA}
                    title={'Les meilleurs catégories'}
                />
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Spinner visible={loading} textContent={'Loading...'} />
            <SearchInput
                setValue={setValue}
                value={value}
                searchCompanies={SearchCompanies}
                setDisplayCompanies={setDisplayCompanies}
            />
            {canDisplayCompanies ? (
                <>
                    {companies ? (
                        <FlatList
                            style={{ flex: 1 }}
                            contentContainerStyle={{ flexGrow: 1 }}
                            data={companies.searchCompanies}
                            scrollEnabled={companies.searchCompanies.length > 0}
                            ListEmptyComponent={
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text>
                                        Nous n'avons pas trouvé de résulat
                                    </Text>
                                </View>
                            }
                            renderItem={({
                                item
                            }: {
                                item: CompanyData;
                            }): ReactElement => (
                                <GrowerCard
                                    navigation={navigation}
                                    grower={item}
                                />
                            )}
                            keyExtractor={(item, index): string =>
                                String(index)
                            }
                        />
                    ) : (
                        <GrowersLoader />
                    )}
                </>
            ) : (
                <VerticalList
                    categories={DATA}
                    title={'Toutes les catégories'}
                    ListHeaderComponent={_renderItem}
                    searchCompanies={_onCategoryClicked}
                />
            )}
            <Cart />
            <DeepLinking />
        </View>
    );
};

// @ts-ignore
SearchScreen.navigationOptions = {
    title: '',

    headerStyle: { height: 0, backgroundColor: 'transparent' }
};

export default SearchScreen;
