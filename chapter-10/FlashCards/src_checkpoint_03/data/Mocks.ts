import CardModel from './Card';
import DeckModel from './Deck';
import { makeReviews } from './QuizCardView';

const MockCards = [
  new CardModel('der Hund', 'the dog', 'fakeDeckID'),
  new CardModel('das Kind', 'the child', 'fakeDeckID'),
  new CardModel('die Frau', 'the woman', 'fakeDeckID'),
  new CardModel('die Katze', 'the cat', 'fakeDeckID')
];

const MockCard = MockCards[0];
const MockReviews = makeReviews(MockCards);
const MockDecks = [new DeckModel('French'), new DeckModel('German')];

MockDecks.map(deck => {
  deck.addCard(new CardModel('der Hund', 'the dog', deck.id));
  deck.addCard(new CardModel('die Katze', 'the cat', deck.id));
  deck.addCard(new CardModel('das Brot', 'the bread', deck.id));
  deck.addCard(new CardModel('die Frau', 'the woman', deck.id));
  return deck;
});

const MockDeck = MockDecks[0];

export { MockReviews, MockCards, MockCard, MockDecks, MockDeck };
