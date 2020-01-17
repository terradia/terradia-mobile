import React, { FunctionComponent, ReactElement } from 'react';
import { View, Platform, FlatList } from 'react-native';
import GrowerCard from '../../components/cards/GrowerCard';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import FilterGrowers from '../../components/growers/Filter';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import styles from './styles/GrowersScreen.style';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import GrowersConfig from '@interfaces/Growers';
// @ts-ignore
import i18n from '@i18n/i18n';

const IS_IPHONE_X = true;
// const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export declare interface GrowersScreen {
    navigation: NavigationStackScreenProps;
}

const GET_COMPANIES = gql`
    query allCompanies {
        getAllCompanies {
            name
            averageMark
            numberOfMarks
            description
            products {
                name
            }
        }
    }
`;

const GrowersScreen: FunctionComponent<GrowersScreen> = ({ navigation }) => {
    const { loading, error, data } = useQuery(GET_COMPANIES);
    const renderContent = (): ReactElement => {
        if (loading) {
            return <View />;
        }
        return (
            <View style={{ flex: 1 }}>
                <FilterGrowers />
                <FlatList
                    data={data.getAllCompanies}
                    keyExtractor={(item: GrowersConfig): string => item.name}
                    renderItem={({ item }): ReactElement => (
                        <GrowerCard navigation={navigation} grower={item} />
                    )}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ReactNativeParallaxHeader
                headerMinHeight={0}
                headerMaxHeight={100}
                extraScrollHeight={20}
                navbarColor="#8FDD3D"
                backgroundColor="#5CC04A"
                title={i18n.t('growerScreen.growers')}
                titleStyle={styles.titleStyle}
                backgroundImageScale={1.5}
                renderContent={renderContent}
                containerStyle={styles.container}
                contentContainerStyle={styles.contentContainer}
                innerContainerStyle={styles.container}
                alwaysShowNavBar={false}
            />
        </View>
    );
};

GrowersScreen.navigationOptions = {
    title: 'Producteurs'
};

export default GrowersScreen;
