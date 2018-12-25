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

  addCard(card: Card) {
    this.cards = this.cards.concat(card);
  }

  setFromObject(ob: Deck) {
    this.name = ob.name;
    this.id = ob.id;
    this.cards = ob.cards;
  }

  static fromObject(ob: Deck) {
    const deck = new Deck(ob.name);
    deck.setFromObject(ob);
    return deck;
  }
}

export default Deck;
