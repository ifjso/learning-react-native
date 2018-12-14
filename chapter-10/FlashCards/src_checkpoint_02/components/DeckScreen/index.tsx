import React, { Component } from 'react';
import { View } from 'react-native';
import { MockDecks } from '../../data/Mocks';
import Deck from './Deck';
import DeckCreation from './DeckCreation';
import DeckModel from '../../data/Deck';

type Props = {};

type State = {
  decks: DeckModel[];
};

class DeckScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { decks: MockDecks };
  }

  _mkDeckViews = () => {
    if (!this.state.decks) {
      return null;
    }

    return this.state.decks.map(deck => (
      <Deck key={deck.id} deck={deck} count={deck.cards.length} />
    ));
  };

  render() {
    return (
      <View>
        {this._mkDeckViews()}
        <DeckCreation />
      </View>
    );
  }
}

export default DeckScreen;
