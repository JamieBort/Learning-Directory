const createDeck = require('../../models/deck');
const FACE_CARDS = require('../../models/card').FACE_CARDS;
const SUITS = require('../../models/card').SUITS;

describe('Deck Suite', function() {
  test('Can create new deck', () => {
    const myDeck = createDeck();
  });

  test('Deck has 52 cards', () => {
    const myDeck = createDeck();

    expect(myDeck.cards.length).toBe(52);
  });

  test("Deck's first card is an Ace of Clubs", () => {
    const myDeck = createDeck();

    expect(myDeck.cards[0].value).toBe(FACE_CARDS.ACE);
    expect(myDeck.cards[0].suit).toBe(SUITS.CLUBS);
  });

  test('All cards in a deck have a value and a suit', () => {
    const myDeck = createDeck();

    for (let x = 0; x < myDeck.cards.length; x++) {
      const myCard = myDeck.cards[x];
      expect(myCard).not.toBeUndefined();
      expect(myCard.value).not.toBeUndefined();
      expect(myCard.suit).not.toBeUndefined();
    }
  });

  test('First two cards should have different values', () => {
    const myDeck = createDeck();

    let card1 = myDeck.cards[0];
    let card2 = myDeck.cards[1];

    expect(card1.value).not.toBe(card2.value);
  });

  test('Can shuffle deck of cards', () => {
    const myDeck = createDeck();
    // make a copy of the cards before shuffling
    let initialCards = myDeck.cards.slice();
    myDeck.shuffle();
    // get a reference to the shuffled cards
    let shuffledCards = myDeck.cards;

    // found something that didn't match
    let nonMatch = false;
    // loop over one of the arrays....
    for (let x = 0; x < initialCards.length; x++) {
      // ... check to see if these cards at this index are different
      if (initialCards[x].suit != shuffledCards[x].suit || initialCards[x].value != shuffledCards[x].value) {
        nonMatch = true;
        break;
      }
    }

    // assert that I found a nonMatch
    expect(nonMatch).toBe(true);
  });
});
