import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, Text} from 'react-native';
import GrowerCard from '../../components/cards/GrowerCard';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import FilterGrowers from '../../components/growers/Filter';

const IS_IPHONE_X = true;
// const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default function GrowersScreen() {

  const renderContent = () => {
    return (
        <View style={{flex: 1}}>
          <FilterGrowers/>
          <GrowerCard/>
            {/*<GrowerCard/>*/}
            {/*<GrowerCard/>*/}
            {/*<GrowerCard/>*/}
            {/*<GrowerCard/>*/}
            {/*<GrowerCard/>*/}
            {/*<GrowerCard/>*/}
            {/*<GrowerCard/>*/}
        </View>
    )
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
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
      />
    </View>
  );
}

GrowersScreen.navigationOptions = {
  title: 'Producteurs',
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: 'white',
    flex: 1,
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
    marginBottom: '10%',

  }
});
