import React, { FC } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { addDeck, reviewDeck } from '../../actions/creators';
import Deck from './Deck';
import DeckCreation from './DeckCreation';
import DeckModel from '../../data/Deck';

type Props = {
  decks: DeckModel[];
  counts: any;
  navigation: NavigationScreenProp<NavigationRoute>;
  createDeck: ({ type, data }: { type: string; data: DeckModel }) => void;
  review: (deckID: string) => void;
};

interface NavOptions extends FC<Props> {
  navigationOptions?: object;
}

const DeckScreen: NavOptions = ({
  decks,
  counts,
  navigation,
  createDeck,
  review
}) => {
  const _createDeck = (name: string) => {
    const createDeckAction = addDeck(name);
    createDeck(createDeckAction);
    navigation.navigate('CardCreation', { deckID: createDeckAction.data.id });
  };

  const _addCards = (deckID: string) =>
    navigation.navigate('CardCreation', { deckID });

  const _review = (deckID: string) => {
    review(deckID);
    navigation.navigate('Review');
  };

  const _makeDeckViews = () => {
    if (!decks) {
      return null;
    }

    return decks.map(deck => (
      <Deck
        deck={deck}
        count={counts[deck.id]}
        key={deck.id}
        add={() => _addCards(deck.id)}
        review={() => _review(deck.id)}
      />
    ));
  };

  return (
    <View>
      {_makeDeckViews()}
      <DeckCreation create={_createDeck} />
    </View>
  );
};

DeckScreen.navigationOptions = { title: 'All Decks' };

const mapDispatchToProps = (dispatch: any) => ({
  createDeck: (deckAction: any) => dispatch(deckAction),
  review: (deckID: string) => dispatch(reviewDeck(deckID))
});

const mapStateToProps = (state: any) => ({
  decks: state.decks,
  counts: state.decks.reduce((sum: any, deck: DeckModel) => {
    sum[deck.id] = deck.cards.length;
    return sum;
  }, {})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckScreen);
