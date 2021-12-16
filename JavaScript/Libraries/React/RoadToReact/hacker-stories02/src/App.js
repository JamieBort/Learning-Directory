import * as React from 'react';

const useSemiPersistentState = (key, initialState) => {
	const [ value, setValue ] = React.useState(localStorage.getItem(key) || initialState);

	React.useEffect(
		() => {
			localStorage.setItem(key, value);
		},
		[ value, key ],
	);

	return [ value, setValue ];
};

function App() {
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

	// const initialStories = [
	// 	{
	// 		title: 'React',
	// 		url: 'https://reactjs.org/',
	// 		author: 'Jordan Walke',
	// 		num_comments: 3,
	// 		points: 4,
	// 		objectID: 0,
	// 	},
	// 	{
	// 		title: 'Redux',
	// 		url: 'https://redux.js.org/',
	// 		author: 'Dan Abramov, Andrew Clark',
	// 		num_comments: 2,
	// 		points: 5,
	// 		objectID: 1,
	// 	},
	// ];
	const [ booleanValue, setBooleanValueValue ] = React.useState({ status01: true, status02: false });
	// const [ stories, setStories ] = React.useState(initialStories);
	// const handleRemoveStory = (item) => {
	// 	const newStories = stories.filter((story) => item.objectID !== story.objectID);
	// 	setStories(newStories);
	// };
	const [ searchTerm, setSearchTerm ] = useSemiPersistentState('search', 'Re');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleClick = () => {
		booleanValue.status01
			? setBooleanValueValue({ status01: false, status02: true })
			: setBooleanValueValue({ status01: true, status02: false });
	};

	return (
		<div>
			<h1>My Hacker Stories</h1>
			<button onClick={handleClick}>Button</button>
			<InputWithLabel
				id="search"
				label="Search"
				value={searchTerm}
				isFocused={booleanValue.status01}
				onInputChange={handleSearch}
			>
				<strong>Search:</strong>
			</InputWithLabel>
			<List list={searchedStories} />
			{/* <List list={searchedStories} onRemoveItem={handleRemoveStory} /> */}
			<InputWithLabel
				id="search"
				label="Search"
				value={searchTerm}
				isFocused={booleanValue.status02}
				onInputChange={handleSearch}
			>
				<strong>second:</strong>
			</InputWithLabel>
		</div>
	);
}

const InputWithLabel = ({ id, label, value, type = 'type', onInputChange, isFocused, children }) => {
	// A
	const inputRef = React.useRef();

	// C
	React.useEffect(
		() => {
			if (isFocused && inputRef.current) {
				// D
				inputRef.current.focus();
			}
		},
		[ isFocused ],
	);
	return (
		<React.Fragment>
			<label htmlFor={id}>{children}</label>
			&nbsp;
			{/* B */}
			<input ref={inputRef} id={id} type={type} value={value} autoFocus={isFocused} onChange={onInputChange} />
		</React.Fragment>
	);
};

// I don't think this is used anymore.
const Search = ({ search, onSearch }) => (
	<React.Fragment>
		<div>
			<label htmlFor="search">Search: </label>
			<input id="search" type="text" value={search} onChange={onSearch} />
		</div>
	</React.Fragment>
);

const List = ({ list }) => <ul>{list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />)}</ul>;
// const List = ({ list, onRemoveItem }) => (
//   <ul>
//     {list.map((item) => (
//       <Item
//         key={item.objectID}
//         item={item}
//         onRemoveItem={onRemoveItem}
//       />
//     ))}
//   </ul>
// );

const Item = ({ title, url, author, num_comments, points }) => (
	<li>
		<span>
			<a href={url}>{title}</a>
		</span>
		<span>{author}</span>
		<span>{num_comments}</span>
		<span>{points}</span>
	</li>
);

export default App;
