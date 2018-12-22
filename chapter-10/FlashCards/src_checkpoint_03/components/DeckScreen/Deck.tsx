import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckModel from '../../data/Deck';
import Button from '../Button';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

type Props = {
  deck: DeckModel;
  count: number;
  review: () => void;
  add: () => void;
};

const Deck: React.FunctionComponent<Props> = ({ deck, count, review, add }) => (
  <View style={styles.deckGroup}>
    <Button style={styles.deckButton} onPress={review}>
      <NormalText>
        {deck.name}: {count} cards
      </NormalText>
    </Button>

    <Button style={styles.editButton} onPress={add}>
      <NormalText>+</NormalText>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  deckGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
    marginBottom: 5
  },
  deckButton: {
    backgroundColor: colors.pink,
    padding: 10,
    margin: 0,
    flex: 1
  },
  editButton: {
    width: 60,
    backgroundColor: colors.pink2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
    flex: 0
  }
});

export default Deck;
