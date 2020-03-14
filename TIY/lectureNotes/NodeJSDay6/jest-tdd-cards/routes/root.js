const express = require('express');
const routes = express.Router();
const createDeck = require('../models/deck');

routes.get('/', (req, res) => {
  let deck = createDeck();
  deck.cards.forEach(card => (card.isFaceDown = false));
  res.render('home', { cards: deck.cards });
});

module.exports = routes;
