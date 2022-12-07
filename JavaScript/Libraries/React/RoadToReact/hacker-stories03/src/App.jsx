import * as React from 'react';

import CallbackHandlersInJSX009 from './scratch/009CallbackHandlersInJSX/CallbackHandlersInJSX'
import LiftingState010 from './scratch/010LiftingState/LiftingState'

// There is no way to pass information up the component tree, since props are naturally only passed downwards. However, we can introduce a callback handler instead: A callback handler gets introduced as event handler (A), is passed as function in props to another component (B), is executed there as callback handler (C), and calls back to the place it was introduced (D):

  const App = () => {
      const stories = [
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
      
      console.log('App renders');

      // const [searchTerm, setSearchTerm] = React.useState(''); // *** From previous chapter ***
      const [searchTerm, setSearchTerm] = React.useState('React');
      console.log('searchTerm:',searchTerm);
    
      const handleSearch = (event) => { // A
        console.log(event.target.value); // D
        setSearchTerm(event.target.value);
      };

      // const searchedStories = stories.filter(function (story) { // *** THESE TWO do the same thing, but are written differently. ***
      //   return story.title.includes(searchTerm);
      // });

      const searchedStories = stories.filter((story) => // *** THESE TWO do the same thing, but are written differently. ***
        // story.title.includes(searchTerm)
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return ( 
        <div>
          <h1>My Hacker Stories</h1>
          
          {/* // B */}
          <Search search={searchTerm} onSearch={handleSearch} />
          
          <hr />
          <List list={searchedStories} />

          <div>
            <hr /><hr />
            <h2>Scratch Section</h2>
            {/* <CallbackHandlersInJSX009/> */}
            <LiftingState010/>
          </div>
        </div>);
    };

    const Search = ({ search, onSearch }) => (
    // const Search = (props) => {
    //   const { search, onSearch } = props;

      // return (
        <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" value={search} onChange={onSearch} />
        </div>
      );
    // };

  const List = ({list}) => (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
   
  const Item = ({item}) => (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
 
export default App;