import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { addDeck, reviewDeck } from '../../actions/creators';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import Deck from './Deck';
import DeckCreation from './DeckCreation';
import DeckModel from '../../data/Deck';

type Props = {
  decks: DeckModel[];
  counts: any;
  createDeck: ({ type, data }: { type: string; data: DeckModel }) => void;
  review: (deckID: string) => void;
  navigation: NavigationScreenProp<NavigationRoute>;
};

interface NavOptions extends React.FunctionComponent<Props> {
  navigationOptions?: object;
}

const DecksScreen: NavOptions = ({
  decks,
  counts,
  createDeck,
  review,
  navigation
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

    return decks.map(deck => {
      return (
        <Deck
          deck={deck}
          count={counts[deck.id]}
          key={deck.id}
          add={() => _addCards(deck.id)}
          review={() => _review(deck.id)}
        />
      );
    });
  };

  return (
    <View>
      {_makeDeckViews()}
      <DeckCreation create={_createDeck} />
    </View>
  );
};

DecksScreen.navigationOptions = { title: 'All Decks' };

const mapDispatchToProps = (dispatch: any) => {
  return {
    createDeck: (deckAction: any) => dispatch(deckAction),
    review: (deckID: string) => dispatch(reviewDeck(deckID))
  };
};

const mapStateToProps = (state: any) => {
  return {
    decks: state.decks,
    counts: state.decks.reduce((sum: any, deck: DeckModel) => {
      sum[deck.id] = deck.cards.length;
      return sum;
    }, {})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksScreen);
