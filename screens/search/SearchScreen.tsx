import React, { FunctionComponent, ReactElement } from 'react';
import { Animated, FlatList, StyleSheet } from 'react-native';
import NavBar from '../../components/header/NavBar';
import { LinearGradient } from 'expo-linear-gradient';
// @ts-ignore
import i18n from '@i18n/i18n';
import SearchInput from '../../components/search/SearchInput';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import { withCollapsible } from 'react-navigation-collapsible';
import HorizontalList from '../../components/search/lists/HorizontalList';
import SearchCard from '../../components/cards/SearchCard';

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
        <AnimatedFlatList
            style={{ flex: 1 }}
            data={DATA}
            ListHeaderComponent={() => <HorizontalList categories={DATA} />}
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
            contentContainerStyle={{ paddingTop: paddingHeight }}
            scrollIndicatorInsets={{ top: paddingHeight }}
            onScroll={onScroll}
            _mustAddThis={animatedY}
        />
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
