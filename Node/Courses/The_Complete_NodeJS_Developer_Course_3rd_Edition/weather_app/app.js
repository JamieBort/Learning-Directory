// ./app.js
require('dotenv').config();
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

// console.log(process.env.DB_URL);
// console.log(process.env.WEATHER_URL);
// console.log(process.env);

weather(process.env.WEATHER_API_KEY, (error, data) => {
	if (error) {
		console.log('Error: ', error);
	} else {
		console.log('Data: ', data);
	}
});

geocode('Philadelphia', process.env.GEOCODE_API_KEY, (error, data) => {
	// console.log('Data: ');
	if (error) {
		console.log('Error: ', error);
	} else {
		console.log('Data: ', data);
		// // console.log('Data: ', data.body);
		// console.log('response.body.features: ', data.body.features);
		// console.log('response.body.features.length: ', data.body.features.length);
	}
});
