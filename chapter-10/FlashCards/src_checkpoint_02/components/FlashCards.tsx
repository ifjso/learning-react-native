import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from './Header';
import DeckScreen from './DeckScreen';
import CardScreen from './CardScreen';
import ReviewScreen from './ReviewScreen';

const FlashCards = () => {
  const _renderScene = () => <DeckScreen />;

  return (
    <View style={styles.container}>
      <Heading />
      {_renderScene()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30 }
});

export default FlashCards;
