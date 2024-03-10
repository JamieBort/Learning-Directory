import * as React from 'react';

const initialStories = [
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

const App = () => {
	console.log('App renders');

	// const stories = [
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

	const [ searchTerm, setSearchTerm ] = useSemiPersistentState('search', 'Re');

	const [ stories, setStories ] = React.useState(initialStories);

	const handleRemoveStory = (item) => {
		const newStories = stories.filter((story) => item.objectID !== story.objectID);
		setStories(newStories);
	};

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<React.Fragment>
			<h1>My Hacker Stories</h1>

			<InputWithLabel id="search" label="Search" value={searchTerm} isFocused onInputChange={handleSearch}>
				<strong>Search:</strong>
			</InputWithLabel>

			{/* <Search search={searchTerm} onSearch={handleSearch} /> */}
			<hr />
			<List list={searchedStories} onRemoveItem={handleRemoveStory} />
		</React.Fragment>
	);
};

const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {
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
			<input ref={inputRef} id={id} type={type} value={value} onChange={onInputChange} />
		</React.Fragment>
	);
};

// const Search = ({ search, onSearch }) => (
// 	<div>
// 		<label htmlFor="search">Search: </label>
// 		<input id="search" type="text" value={search} onChange={onSearch} />
// 	</div>
// );

const List = ({ list, onRemoveItem }) => (
	<ul>{list.map((item) => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />)}</ul>
	// <ul>{list.map((item) => <Item key={item.objectID} {...item} />)}</ul>
);

const Item = ({ item, onRemoveItem }) => {
	// const handleRemoveItem = () => {
	// 	onRemoveItem(item);
	// };

	return (
		<li>
			<span>
				<a href={item.url}>{item.title}</a>
			</span>
			<span>{item.author}</span>
			<span>{item.num_comments}</span>
			<span>{item.points}</span>
			<span>
				{/* <button type="button" onClick={handleRemoveItem}> */}
				{/* <button type="button" onClick={onRemoveItem.bind(null, item)}> */}
				<button type="button" onClick={() => onRemoveItem(item)}>
					Dismiss
				</button>
			</span>
		</li>
	);
};

// const Item = ({ title, url, author, num_comments, points }) => (
// 	<li>
// 		<span>
// 			<a href={url}>{title}</a>
// 		</span>
// 		<span>{author}</span>
// 		<span>{num_comments}</span>
// 		<span>{points}</span>
// 	</li>
// );

// const Item = ({ item }) => (
// 	<li>
// 		<span>
// 			<a href={item.url}>{item.title}</a>
// 		</span>
// 		<span>{item.author}</span>
// 		<span>{item.num_comments}</span>
// 		<span>{item.points}</span>
// 	</li>
// );

export default App;
