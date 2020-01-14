import React from 'react';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import GrowerCard from '../../components/cards/GrowerCard';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import FilterGrowers from '../../components/growers/Filter';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const IS_IPHONE_X = true;
// const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export declare interface GrowersScreen {
    navigation?: NavigationStackScreenProps;
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

export default function GrowersScreen(props: GrowersScreen) {
    const { loading, error, data } = useQuery(GET_COMPANIES);

    const renderContent = () => {
        if (loading) {
            return <View />;
        }
        return (
            <View style={{ flex: 1 }}>
                <FilterGrowers />
                <FlatList
                    data={data.getAllCompanies}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <GrowerCard
                            navigation={props.navigation}
                            grower={item}
                        />
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
                title="Producteurs"
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
}

GrowersScreen.navigationOptions = {
    title: 'Producteurs'
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: 'white',
        flex: 1
    },
    contentContainer: {
        flexGrow: 1,
        marginBottom: '10%',
        color: 'red'
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginRight: '30%'
    },
    innerContainerStyle: {
        marginBottom: '10%'
    }
});
