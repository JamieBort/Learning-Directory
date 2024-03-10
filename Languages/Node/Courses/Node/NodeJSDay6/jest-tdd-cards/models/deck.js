// The model controls access to data and ways to manipulate that data.

const createCard = require('./card');
const SUITS = createCard.SUITS;
const FACE_CARDS = createCard.FACE_CARDS;

// make 52 cards
let cards = [];
for (var s = SUITS.CLUBS; s <= SUITS.SPADES; s++) {
  for (var v = FACE_CARDS.ACE; v <= FACE_CARDS.KING; v++) {
    cards.push(createCard(v, s));
  }
}

function createDeck() {
  return {
    cards: cards,
    shuffle: function() {
      for (let i = this.cards.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * i);
        // swap the card and this random index
        // this is called destructuring and is an ES 6 feature.
        [this.cards[i], this.cards[rand]] = [this.cards[rand], this.cards[i]];
      }
    }
  };
}

module.exports = createDeck;
