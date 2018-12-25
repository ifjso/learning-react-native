import { MockDecks } from '../data/Mocks';
import DecksReducer from './decks';
import ReviewReducer, { makeReviewState } from './reviews';

const initialState = () => ({
  decks: MockDecks,
  currentReview: makeReviewState()
});

export const reducer = (state = initialState(), action: any) => {
  const decks = DecksReducer(state.decks, action);

  return {
    decks,
    currentReview: ReviewReducer(state.currentReview, action, decks)
  };
};
