# React Redux Tutorial for Beginners The Complete Guide 2020

Following this tutorial to learn Redux better.

## Status
I read through up to this section:
https://www.valentinog.com/blog/redux/#react-redux-tutorial-getting-to-know-redux-actions-and-named-constants

## Notes
Store - holds all of the application's state.
see `src/js/store/index.js`

Reducers - Redux reducer is just a JavaScript function. It takes two parameters: the current state and action. Returns the (new) state.
See `src/js/reducers/index.js`

Actions - JavaScript object consisting of type and payload. The type property drives how the state should change and it's always required by Redux. The payload property instead describes what should change, and might be omitted.

Action Creator - best practice in Redux we wrap every action within a function, so that object creation is abstracted away. Such function takes the name of action creator: let’s put everything together by creating a simple action creator.
See `src/js/actions/index.js`

## Associated Links
* https://trello.com/c/5nNobFgd/1097-react-redux-tutorial-for-beginners-the-complete-guide-2020
* [React Redux Tutorial for Beginners: The Complete Guide (2020)](https://www.valentinog.com/blog/redux/) 
It comes with associated [Redux](https://www.youtube.com/playlist?list=PLfNd7po_IV0GTfQb8RJirrt83BFMF-Lj0) YouTube videos.