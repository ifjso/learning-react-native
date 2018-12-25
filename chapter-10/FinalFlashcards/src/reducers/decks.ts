import { ADD_DECK, ADD_CARD, LOAD_DATA } from '../actions/types';
import Deck from '../data/Deck';
import { writeDecks } from '../storage/decks';
import Card from '../data/Card';

const decksWithNewCard = (oldDecks: Deck[], card: Card): Deck[] => {
  const newState = oldDecks.map(deck => {
    if (deck.id === card.deckID) {
      deck.addCard(card);
    }

    return deck;
  });

  return saveDecks(newState);
};

const saveDecks = (state: Deck[]): Deck[] => {
  writeDecks(state);
  return state;
};

const reducer = (state: Deck[] = [], action: any): Deck[] => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data;
    case ADD_DECK:
      const newState = state.concat(action.data);
      saveDecks(newState);
      return newState;
    case ADD_CARD:
      return decksWithNewCard(state, action.data);
    default:
      return state;
  }
};

export default reducer;
