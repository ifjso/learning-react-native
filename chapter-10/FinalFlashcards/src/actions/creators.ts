import {
  ADD_DECK,
  ADD_CARD,
  REVIEW_DECK,
  STOP_REVIEW,
  NEXT_REVIEW,
  LOAD_DATA
} from './types';

import Card from '../data/Card';
import Deck from '../data/Deck';

export const addDeck = (name: string) => ({
  type: ADD_DECK,
  data: new Deck(name)
});

export const addCard = (front: string, back: string, deckID: string) => ({
  type: ADD_CARD,
  data: new Card(front, back, deckID)
});

export const reviewDeck = (deckID: string) => ({
  type: REVIEW_DECK,
  data: { deckID }
});

export const stopReview = () => ({ type: STOP_REVIEW, data: {} });

export const nextReview = () => ({ type: NEXT_REVIEW, data: {} });

export const loadData = (data: Deck[]) => ({ type: LOAD_DATA, data });
