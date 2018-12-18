import { ADD_DECK, ADD_CARD } from '../actions/types';
import Deck from '../data/Deck';
import Card from '../data/Card';

const decksWithNewCard = (oldDecks: Deck[], card: Card) =>
  oldDecks.map(deck => {
    if (deck.id === card.deckID) {
      deck.addCard(card);
      return deck;
    }

    return deck;
  });

const reducer = (state = [], action) => {
  console.warn('Changes are not persisted to disk');

  
};
