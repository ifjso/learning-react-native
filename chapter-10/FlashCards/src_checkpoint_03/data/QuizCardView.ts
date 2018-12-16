import _ from 'lodash';
import Card from './Card';

class QuizCardView {
  orientation: string;
  cardID: string;
  prompt: string;
  correctAnswer: string;
  answers: string[];

  constructor(
    orientation: string,
    cardID: string,
    prompt: string,
    correctAnswer: string,
    answers: string[]
  ) {
    this.orientation = orientation;
    this.cardID = cardID;
    this.prompt = prompt;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }
}

const makeReviews = (cards: Card[]): QuizCardView[] => {
  const makeQuizCardViews = (sideOne: string, sideTwo: string) => {
    return cards.map(card => {
      const others = cards.filter(other => other.id !== card.id);
      const answers = _.shuffle(
        [card[sideTwo]].concat(_.sampleSize(_.map(others, sideTwo)), 3)
      );

      return new QuizCardView(
        sideOne,
        card.id,
        card[sideOne],
        card[sideTwo],
        answers
      );
    });
  };

  const reviews = makeQuizCardViews('front', 'back').concat(
    makeQuizCardViews('back', 'front')
  );

  return _.shuffle(reviews);
};

export { QuizCardView, makeReviews };
