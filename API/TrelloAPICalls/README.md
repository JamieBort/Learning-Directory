# README Trello API Calls

Steps to run this.

Install the required npm packages. To date they're `dotenv` and `node-fetch`.
So run `npm i dotenv` in the root directory of this project.
And run `npm i node-fetch` in the root directory of this project.

The `.env` file needs to be in the directory where `require('dotenv').config({ path: './../../.env' });` is expecting it to be.

When these above conditions are met, run `nodemon main.js` in the root directory of this project.