// The model controls access to data and ways to manipulate that data.

function createCard(value, suit) {
  return {
    value: value,
    suit: suit,
    isFaceDown: true,
    toString: function() {
      if (this.isFaceDown) {
        return '****';
      } else {
        return `${this.valueToString()} of ${this.suitToString()}`;
      }
    },
    valueToString: function() {
      switch (this.value) {
        case FACE_CARDS.ACE:
          return 'Ace';
        case FACE_CARDS.JACK:
          return 'Jack';
        case FACE_CARDS.QUEEN:
          return 'Queen';
        case FACE_CARDS.KING:
          return 'King';
        default:
          return this.value;
      }
    },
    suitToString: function() {
      switch (this.suit) {
        case SUITS.CLUBS:
          return 'Clubs';
        case SUITS.DIAMONDS:
          return 'Diamonds';
        case SUITS.HEARTS:
          return 'Hearts';
        case SUITS.SPADES:
          return 'Spades';
      }
    }
  };
}

const SUITS = {
  CLUBS: 0,
  DIAMONDS: 1,
  HEARTS: 2,
  SPADES: 3
};
const FACE_CARDS = {
  ACE: 1,
  JACK: 11,
  QUEEN: 12,
  KING: 13
};

module.exports = createCard;
module.exports.SUITS = SUITS;
module.exports.FACE_CARDS = FACE_CARDS;
