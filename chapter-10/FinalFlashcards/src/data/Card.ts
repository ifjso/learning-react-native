import md5 from 'md5';

class Card {
  front: string;
  back: string;
  deckID: string;
  id: string;
  [key: string]: any;

  constructor(front: string, back: string, deckID: string) {
    this.front = front;
    this.back = back;
    this.deckID = deckID;
    this.id = md5(`${front}${back}${deckID}`);
  }

  setFromObject(ob: Card) {
    this.front = ob.front;
    this.back = ob.back;
    this.deckID = ob.deckID;
    this.id = ob.id;
  }

  static fromObject(ob: Card) {
    const card = new Card(ob.front, ob.back, ob.deckID);
    card.setFromObject(ob);
    return card;
  }
}

export default Card;
