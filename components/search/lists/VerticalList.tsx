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
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

declare interface VerticalListProps {
    categories: Array<string>;
    title: string;
    paddingHeight: number;
    animatedY: number;
    onScroll: any;
    ListHeaderComponent: any;
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
    animatedY,
    onScroll,
    paddingHeight,
    ListHeaderComponent
}) => {
    return (
        <View style={{flex: 1}}>
            <Text style={styles.title}>{title}</Text>
            <AnimatedFlatList
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
                ListHeaderComponent={ListHeaderComponent}
                numColumns={2}
                keyExtractor={(item, index): string => String(index)}
                _mustAddThis={animatedY}
                onScroll={onScroll}
                scrollIndicatorInsets={{ top: paddingHeight }}
                contentContainerStyle={{ paddingTop: paddingHeight }}

            />
        </View>
    );
};

export default VerticalList;
