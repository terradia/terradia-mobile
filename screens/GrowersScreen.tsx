import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import GrowerCard from '../components/cards/GrowerCard';

export default function GrowersScreen() {
  return (
    <View style={styles.container}>
      <GrowerCard/>
    </View>
  );
}

GrowersScreen.navigationOptions = {
  title: 'Producteurs',
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: 'white',
  },
});
