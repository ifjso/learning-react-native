import { makeReviews, QuizCardView } from '../data/QuizCardView';
import { REVIEW_DECK, NEXT_REVIEW, STOP_REVIEW } from '../actions/types';
import Deck from '../data/Deck';

type ReviewState = {
  deckID: string;
  questions: QuizCardView[];
  currentQuestionIndex: number;
};

export const makeReviewState = (
  deckID: string = '',
  questions: QuizCardView[] = [],
  currentQuestionIndex: number = 0
): ReviewState => ({ deckID, questions, currentQuestionIndex });

const findDeck = (decks: Deck[], id: string) => decks.find(d => d.id === id);

const generateReviews = (deck: Deck = new Deck('')): ReviewState =>
  makeReviewState(deck.id, makeReviews(deck.cards), 0);

const nextReviews = (state: ReviewState): ReviewState =>
  makeReviewState(
    state.deckID,
    state.questions,
    state.currentQuestionIndex + 1
  );

const reducer = (
  state: ReviewState = makeReviewState(),
  action: any,
  decks: Deck[]
): ReviewState => {
  switch (action.type) {
    case REVIEW_DECK:
      return generateReviews(findDeck(decks, action.data.deckID));
    case NEXT_REVIEW:
      return nextReviews(state);
    case STOP_REVIEW:
      return makeReviewState();
    default:
      return state;
  }
};

export default reducer;
