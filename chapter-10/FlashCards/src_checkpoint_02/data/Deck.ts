import md5 from 'md5';
import Card from './Card';

class Deck {
  name: string;
  id: string;
  cards: Card[];

  constructor(name: string) {
    this.name = name;
    this.id = md5(`deck:${name}`);
    this.cards = [];
  }

  setFromObject(ob: Deck) {
    this.name = ob.name;
    this.cards = ob.cards;
    this.id = ob.id;
  }

  addCard(card: Card) {
    this.cards = this.cards.concat(card);
  }

  static fromObject(ob: Deck): Deck {
    const deck = new Deck(ob.name);
    deck.setFromObject(ob);
    return deck;
  }
}

export default Deck;
