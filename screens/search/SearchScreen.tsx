import React, { FunctionComponent, ReactElement } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// @ts-ignore
import SearchInput from '../../components/search/SearchInput';
import { withCollapsible } from 'react-navigation-collapsible';
import HorizontalList from '../../components/search/lists/HorizontalList';
import Cart from '../../components/cart';
import VerticalList from '../../components/search/lists/VerticalList';

declare interface SearchScreenProps {
    collapsible: any;
}

const DATA = [
    'Viticulteurs',
    'Glaciers',
    'Boucherie',
    'Apiculteurs',
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
    collapsible
}) => {
    const { paddingHeight, animatedY, onScroll } = collapsible;

    return (
        <View style={{ flex: 1 }}>
            <Animated.ScrollView
                _mustAddThis={animatedY}
                onScroll={onScroll}
                scrollIndicatorInsets={{ top: paddingHeight }}
                contentContainerStyle={{ paddingTop: paddingHeight }}
            >
                <HorizontalList
                    categories={DATA}
                    title={'Nos produits préférés'}
                />
                <HorizontalList
                    categories={DATA}
                    title={'Les meilleurs catégories'}
                />
                <VerticalList
                    categories={DATA}
                    title={'Toutes les catégories'}
                />
            </Animated.ScrollView>
            <Cart />
        </View>
    );
};

// @ts-ignore
SearchScreen.navigationOptions = {
    title: '',
    headerBackground: (): ReactElement => (
        <LinearGradient
            style={{ flex: 1, height: 45 }}
            colors={['#8FDD3D', '#5CC04A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        />
    ),
    headerStyle: { height: 45, backgroundColor: 'transparent' }
};
const styles = StyleSheet.create({});

const collapsibleParams = {
    collapsibleComponent: SearchInput,
    collapsibleBackgroundStyle: {
        height: 65,
        backgroundColor: '#ffffff'
    }
};

export default withCollapsible(SearchScreen, collapsibleParams);
