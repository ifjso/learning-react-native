import { ADD_DECK, ADD_CARD } from '../actions/types';
import Deck from '../data/Deck';
import Card from '../data/Card';

const decksWithNewCard = (oldDecks: Deck[], card: Card): Deck[] =>
  oldDecks.map(deck => {
    if (deck.id === card.deckID) {
      deck.addCard(card);
      return deck;
    }

    return deck;
  });

const reducer = (state: Deck[] = [], action: any) => {
  console.warn('Changes are not persisted to disk');

  switch (action.type) {
    case ADD_DECK:
      return state.concat(action.data);
    case ADD_CARD:
      return decksWithNewCard(state, action.data);
    default:
      return state;
  }
};

export default reducer;
