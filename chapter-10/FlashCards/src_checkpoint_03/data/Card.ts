import md5 from 'md5';

class Card {
  [key: string]: any;
  front: string;
  back: string;
  deckID: string;
  id: string;

  constructor(front: string, back: string, deckID: string) {
    this.front = front;
    this.back = back;
    this.deckID = deckID;
    this.id = md5(front + back + deckID);
  }

  setFromObject(ob: Card): void {
    this.front = ob.front;
    this.back = ob.back;
    this.deckID = ob.deckID;
    this.id = ob.id;
  }

  static fromObject(ob: Card): Card {
    const c = new Card(ob.front, ob.back, ob.deckID);
    c.setFromObject(ob);
    return c;
  }
}

export default Card;
