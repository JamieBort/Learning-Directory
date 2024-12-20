// src/js/components/List.js

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
	<ul>
		{articles.map((el) => (
			<li key={el.id}>
				{el.id}: {el.title}
			</li>
		))}
	</ul>
);

// const ConnectedList = ({ articles }) => (
// 	<div>
// 		<ul>
// 			<li>Here is the default list.</li>
// 			<li>Need to populate it from the store now.</li>
// 			{articles.map((el) => (
// 				<li key={el.id}>
// 					{el.id}: {el.title}
// 				</li>
// 			))}
// 		</ul>
// 	</div>
// );

const List = connect(mapStateToProps)(ConnectedList);

export default List;
