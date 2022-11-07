import * as React from 'react';
 
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

  const App = () => (
    // function App() {
  // return (
    <div>
    <h1>My Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <Search />
     <hr />
     <List />
    </div>
// }
  );

const Search = () => (
// function Search() {
//   return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
// }
  );

const List = () => (
// function List() {
//   return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
// }
  );
 
export default App;