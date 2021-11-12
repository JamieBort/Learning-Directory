// finds the element with the id `first-paragraph` and selects it
let firstParagraph = document.querySelector('#first-paragraph');
console.log('first paragraph', firstParagraph);
console.log(firstParagraph);

// matches two paragraphs in the document but only returns the first,
// because querySelector always returns at most one element.
let firstParagraph2 = document.querySelector('p');
console.log('first paragraph (again)', firstParagraph2);

// finds the element with the `favorite-foods` class
let favoriteFoodsList = document.querySelector('.favorite-foods');
console.log('favorite foods list', favoriteFoodsList);

// matches three list items but only returns the first
// because this API always returns, at most, one element.
let firstFavoriteFood = document.querySelector('.favorite-foods li');
console.log('first favorite food', firstFavoriteFood);

// finds nothing because there is no `ol`
// element on the page. Therefore the API returns null.
let nonExistentElement = document.querySelector('ol');
console.log('non-existent element', nonExistentElement);
