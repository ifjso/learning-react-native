import Card from './Card';
import Deck from './Deck';
import { mkReviews, QuizCardView } from './QuizCardView';

const MockCards: Card[] = [
  new Card('der Hund', 'the dog', 'fakeDeckID'),
  new Card('das Kind', 'the child', 'fakeDeckID'),
  new Card('die Frau', 'the woman', 'fakeDeckID'),
  new Card('die Katze', 'the cat', 'fakeDeckID')
];

const MockCard: Card = MockCards[0];
const MockReviews: QuizCardView[] = mkReviews(MockCards);
const MockDecks: Deck[] = [new Deck('French'), new Deck('German')];

MockDecks.map(deck => {
  deck.addCard(new Card('der Hund', 'the dog', deck.id));
  deck.addCard(new Card('die Katze', 'the cat', deck.id));
  deck.addCard(new Card('das Brot', 'the bread', deck.id));
  deck.addCard(new Card('die Frau', 'the woman', deck.id));
  return deck;
});

const MockDeck = MockDecks[0];

export { MockReviews, MockCards, MockCard, MockDecks, MockDeck };
