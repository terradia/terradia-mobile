import React, { FunctionComponent, ReactElement } from 'react';
import { FlatList, Animated, View } from 'react-native';
import GrowerCard from '../../components/cards/GrowerCard';
import FilterGrowers from '../../components/growers/Filter';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import NavBar from '../../components/header/NavBar';
import { withCollapsible } from 'react-navigation-collapsible';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigationParam } from 'react-navigation-hooks';
import Cart from '../../components/cart';
import { GrowersConfig } from '@interfaces/Growers.d';

declare interface GrowersScreen {
    navigation: NavigationStackScreenProps;
    collapsible: any;
}

declare interface ItemProps {
    item: GrowersConfig;
}

const GrowersScreen: FunctionComponent<GrowersScreen> = ({
    navigation,
    collapsible
}) => {
    const growers = useNavigationParam('growers');
    const { paddingHeight, animatedY, onScroll } = collapsible;
    return (
        <View style={{ flex: 1 }}>
            <Animated.ScrollView _mustAddThis={animatedY} onScroll={onScroll}>
                <FlatList
                    style={{ flex: 1 }}
                    data={growers.getAllCompanies}
                    renderItem={({ item }: ItemProps): ReactElement => (
                        <GrowerCard navigation={navigation} grower={item} />
                    )}
                    keyExtractor={(item, index): string => String(index)}
                    contentContainerStyle={{ paddingTop: paddingHeight }}
                    scrollIndicatorInsets={{ top: paddingHeight }}
                />
            </Animated.ScrollView>
            <Cart />
        </View>
    );
};

const collapsibleParams = {
    collapsibleComponent: FilterGrowers,
    collapsibleBackgroundStyle: {
        height: 48,
        backgroundColor: 'white'
    }
};

// @ts-ignore
GrowersScreen.navigationOptions = {
    headerTitle: (): ReactElement => <NavBar />,
    headerBackground: (): ReactElement => (
        <LinearGradient
            style={{ flex: 1, height: 80 }}
            colors={['#8FDD3D', '#5CC04A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
        />
    ),
    headerStyle: { height: 80, backgroundColor: 'transparent' }
};

export default withCollapsible(GrowersScreen, collapsibleParams);
