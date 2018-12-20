import { makeReviews } from '../data/QuizCardView';
import { NEXT_REVIEW, REVIEW_DECK, STOP_REVIEW } from '../actions/types';
import { QuizCardView } from '../../src_checkpoint_03/data/QuizCardView';
import Deck from '../data/Deck';

export const makeReviewState = (
  deckID: string = '',
  questions: QuizCardView[] = [],
  currentQuestionIndex: number = 0
) => ({ deckID, questions, currentQuestionIndex });

const findDeck = (decks: Deck[], id: string) => decks.find(d => d.id === id);

const generateReviews = (deck: Deck = new Deck('')) =>
  makeReviewState(deck.id, makeReviews(deck.cards), 0);

const nextReview = (state: {
  deckID: string;
  questions: QuizCardView[];
  currentQuestionIndex: number;
}) =>
  makeReviewState(
    state.deckID,
    state.questions,
    state.currentQuestionIndex + 1
  );

const reducer = (
  state: {
    deckID: string;
    questions: QuizCardView[];
    currentQuestionIndex: number;
  } = makeReviewState(),
  action: any,
  decks: Deck[]
) => {
  switch (action.type) {
    case REVIEW_DECK:
      return generateReviews(findDeck(decks, action.data.deckID));
    case NEXT_REVIEW:
      return nextReview(state);
    case STOP_REVIEW:
      return makeReviewState();
    default:
      return state;
  }
};

export default reducer;
