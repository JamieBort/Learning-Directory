const createCard = require('../../models/card');
const SUITS = createCard.SUITS;
const FACE_CARDS = createCard.FACE_CARDS;

describe('Card Suite', function() {
  test('Can create a new card', () => {
    let myCard = createCard();
  });

  test('Can create a king', () => {
    let myCard = createCard(FACE_CARDS.KING);

    expect(myCard.value).toBe(FACE_CARDS.KING);
  });

  test('Can create a queen', () => {
    let myCard = createCard(FACE_CARDS.QUEEN);

    expect(myCard.value).toBe(FACE_CARDS.QUEEN);
  });

  test('Can create a 7', () => {
    let myCard = createCard(7);

    expect(myCard.value).toBe(7);
  });

  test('Can create a king of spades', () => {
    let myCard = createCard(FACE_CARDS.KING, SUITS.SPADES);

    expect(myCard.suit).toBe(SUITS.SPADES);
  });

  test('Can create a king of clubs', () => {
    let myCard = createCard(FACE_CARDS.KING, SUITS.CLUBS);

    expect(myCard.suit).toBe(SUITS.CLUBS);
  });

  test('New cards are face down', () => {
    let myCard = createCard(10, SUITS.HEARTS);

    expect(myCard.isFaceDown).toBe(true);
  });

  test('Can describe 5 of Diamonds that is face down by default', () => {
    let myCard = createCard(5, SUITS.DIAMONDS);

    expect(myCard.toString()).toBe('****');
  });

  test('Can describe 5 of Diamonds that is face up', () => {
    let myCard = createCard(5, SUITS.DIAMONDS);
    myCard.isFaceDown = false;
    expect(myCard.toString()).toBe('5 of Diamonds');
  });

  test('Card Suit constants have numeric values', () => {
    let SUITS = createCard.SUITS;

    expect(SUITS.CLUBS).toBe(0);
    expect(SUITS.DIAMONDS).toBe(1);
    expect(SUITS.HEARTS).toBe(2);
    expect(SUITS.SPADES).toBe(3);
  });

  test('Card face cards constants have numeric values', () => {
    let FACE_CARDS = createCard.FACE_CARDS;

    expect(FACE_CARDS.ACE).toBe(1);
    expect(FACE_CARDS.JACK).toBe(11);
    expect(FACE_CARDS.QUEEN).toBe(12);
    expect(FACE_CARDS.KING).toBe(13);
  });

  test('Can describe card with constants', () => {
    let myCard = createCard(FACE_CARDS.ACE, SUITS.CLUBS);
    myCard.isFaceDown = false;

    expect(myCard.toString()).toBe('Ace of Clubs');
  });
});
