import * as React from 'react';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

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
	switch (action.type) {
		case 'STORIES_FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case 'STORIES_FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case 'STORIES_FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case 'REMOVE_STORY':
			return {
				...state,
				data: state.data.filter((story) => action.payload.objectID !== story.objectID),
			};
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
		new Promise((resolve) => setTimeout(() => resolve({ data: { stories: initialStories } }), 2000));

	//   // Try to use the erroneous data fetching function again and check whether everything works as expected now:
	//   const getAsyncStories = () =>
	// new Promise((resolve, reject) => setTimeout(reject, 2000));

	const [ booleanValue, setBooleanValueValue ] = React.useState({ status01: true, status02: false });
	// const [ stories, dispatchStories ] = React.useReducer(storiesReducer, []);
	const [ stories, dispatchStories ] = React.useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		isError: false,
	});

	React.useEffect(
		() => {
			if (!searchTerm) return;

			dispatchStories({ type: 'STORIES_FETCH_INIT' });

			fetch(`${API_ENDPOINT}${searchTerm}`)
				.then((response) => response.json())
				.then((result) => {
					dispatchStories({
						type: 'STORIES_FETCH_SUCCESS',
						payload: result.hits,
					});
				})
				.catch(() => dispatchStories({ type: 'STORIES_FETCH_FAILURE' }));
		},
		// [ searchTerm ], // *** This produces an error. ***
		[], // *** This does not produce an error. ***
	);

	const handleRemoveStory = (item) => {
		dispatchStories({
			type: 'REMOVE_STORY',
			payload: item,
		});
	};

	const [ searchTerm, setSearchTerm ] = useSemiPersistentState('search', 'Re');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	// const searchedStories = stories.data.filter((story) =>
	// 	story.title.toLowerCase().includes(searchTerm.toLowerCase()),
	// );

	const handleClick = () => {
		booleanValue.status01
			? setBooleanValueValue({ status01: false, status02: true })
			: setBooleanValueValue({ status01: true, status02: false });
	};

	return (
		<div>
			<h1>My Hacker Stories</h1>
			<InputWithLabel
				id="search"
				label="Search"
				value={searchTerm}
				isFocused={booleanValue.status01}
				onInputChange={handleSearch}
			>
				<strong>Search:</strong>
			</InputWithLabel>
			<hr />
			<button onClick={handleClick}>Button</button>
			<hr />
			<InputWithLabel
				id="search"
				label="Search"
				value={searchTerm}
				isFocused={booleanValue.status02}
				onInputChange={handleSearch}
			>
				<strong>second:</strong>
			</InputWithLabel>
			{stories.isError && <p>Something went wrong ...</p>}
			{stories.isLoading ? <p>Loading ...</p> : <List list={stories.data} onRemoveItem={handleRemoveStory} />}
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
