# React Redux Tutorial for Beginners The Complete Guide 2020

Following this tutorial to learn Redux better.

## Status
20210422 after 1400
Picking up here: [React Redux tutorial: what is a Redux middleware?](https://www.valentinog.com/blog/redux/#react-redux-tutorial-what-is-a-redux-middleware)

20210422 1400
Picking up here: https://www.valentinog.com/blog/redux/#react-redux-tutorial-connecting-react-with-redux
I have worked up to this section:
https://www.valentinog.com/blog/redux/#react-redux-tutorial-what-is-a-redux-middleware

20210421
I read through up to this section:
https://www.valentinog.com/blog/redux/#react-redux-tutorial-connecting-react-with-redux
At which point in the `src/js/reducers/index.js` file I created the remove action: `if (action.type === REMOVE_ARTICLE)`. This was not part of the tutorial. I did it to solidify my understanding.

## Notes
Ran `npm i redux --save-dev` in the `react-redux-tutorial` root directory. Which reslted in this Redux dependency
```
  "devDependencies": {
    "redux": "^4.0.5"
  }
```
 in the `package.json` file.

**Store** - holds all of the application's state.
See `src/js/store/index.js`

**Reducers** - Redux reducer is just a JavaScript function. It takes two parameters: the current state and action. Returns the (new) state.
See `src/js/reducers/index.js`

**Actions** - JavaScript object consisting of type and payload. The type property drives how the state should change and it's always required by Redux. The payload property instead describes what should change, and might be omitted.

Change state by dispatching an action to the store.

**Action Creator** - best practice in Redux we wrap every action within a function, so that object creation is abstracted away. Such function takes the name of action creator: let’s put everything together by creating a simple action creator.
See `src/js/actions/index.js`

Three methods in the Redux library (the most important three):
* **getState** for reading the current state of the application: 
`store.getState();` // output: {articles: Array(0)} if we havn't updated the state yet.

* **subscribe** for listening to state changes with subscribe:
`store.subscribe(() => console.log('Look ma, Redux!!'));`
The subscribe method accepts a callback that will fire whenever an action is dispatched. 
Dispatching an action means notifying the store that we intend to change the state.

* **dispatch** for dispatching an action:
 `store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );`
 To change the state in Redux we need to dispatch an action. 
 To dispatch an action we'll call the dispatch method. 
 We have one action for now: addArticle for adding a new item to the state. 

## Associated Links
* https://trello.com/c/5nNobFgd/1097-react-redux-tutorial-for-beginners-the-complete-guide-2020
* [React Redux Tutorial for Beginners: The Complete Guide (2020)](https://www.valentinog.com/blog/redux/) 
It comes with associated [Redux](https://www.youtube.com/playlist?list=PLfNd7po_IV0GTfQb8RJirrt83BFMF-Lj0) YouTube videos.