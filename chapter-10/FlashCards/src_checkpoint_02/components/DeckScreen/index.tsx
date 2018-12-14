import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { MockDecks } from '../../data/Mocks';
import Deck from './Deck';
import DeckCreation from './DeckCreation';
import DeckModel from '../../data/Deck';

type Props = {
  navigation: NavigationScreenProp<NavigationRoute>;
};

type State = {
  decks: DeckModel[];
};

class DeckScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { decks: MockDecks };
  }

  _review = () => {
    console.warn('Actual reviews not implemented');
    this.props.navigation.navigate('Review');
  };

  _mkDeckViews = () => {
    if (!this.state.decks) {
      return null;
    }

    return this.state.decks.map(deck => (
      <Deck
        key={deck.id}
        deck={deck}
        count={deck.cards.length}
        review={this._review}
      />
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
