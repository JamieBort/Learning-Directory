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

const storiesReducer = (state, action) => {
	// if (action.type === 'SET_STORIES') {
	// 	return action.payload;
	// } else if (action.type === 'REMOVE_STORY') {
	// 	return state.filter((story) => action.payload.objectID !== story.objectID);
	// } else {
	// 	throw new Error();
	// }
	switch (action.type) {
		case 'SET_STORIES':
			return action.payload;
		case 'REMOVE_STORY':
			return state.filter((story) => action.payload.objectID !== story.objectID);
		default:
			throw new Error();
	}
};

function App() {
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

	const getAsyncStories = () =>
		new Promise((resolve) => setTimeout(() => resolve({ data: { stories: initialStories } }), 5000));

	const [ booleanValue, setBooleanValueValue ] = React.useState({ status01: true, status02: false });
	// const [ stories, setStories ] = React.useState(initialStories);
	// const [ stories, setStories ] = React.useState([]);
	const [ stories, dispatchStories ] = React.useReducer(storiesReducer, []);
	const [ isLoading, setIsLoading ] = React.useState(false);
	const [ isError, setIsError ] = React.useState(false);

	React.useEffect(() => {
		setIsLoading(true);

		getAsyncStories().then((result) => {
			// setStories(result.data.stories);
			dispatchStories({
				type: 'SET_STORIES',
				payload: result.data.stories,
			});
			setIsLoading(false);
		});
	}, []);

	const handleRemoveStory = (item) => {
		// const newStories = stories.filter((story) => item.objectID !== story.objectID);
		// // setStories(newStories);
		// dispatchStories({
		// 	type: 'SET_STORIES',
		// 	payload: newStories,
		// });

		dispatchStories({
			type: 'REMOVE_STORY',
			payload: item,
		});
	};

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
			{/* <List list={searchedStories} onRemoveItem={handleRemoveStory} /> */}
			{isError && <p>Something went wrong ...</p>}
			{isLoading ? <p>Loading ...</p> : <List list={searchedStories} onRemoveItem={handleRemoveStory} />}
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

// const List = ({ list }) => <ul>{list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />)}</ul>;

const List = ({ list, onRemoveItem }) => (
	<ul>{list.map((item) => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />)}</ul>
);

const Item = ({ item, onRemoveItem }) => {
	const handleRemoveItem = () => {
		onRemoveItem(item);
	};

	return (
		<li>
			<span>
				<a href={item.url}>{item.title}</a>
			</span>
			<span>{item.author}</span>
			<span>{item.num_comments}</span>
			<span>{item.points}</span>
			<span>
				<button type="button" onClick={handleRemoveItem}>
					{/* <button type="button" onClick={() => onRemoveItem(item)}> */}
					Dismiss
				</button>
			</span>
		</li>
	);
};

export default App;
