// ./app.js
require('dotenv').config();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.env.FORECAST_API_KEY);
// console.log(process.env);

forecast(37.8267, -122.4233, process.env.FORECAST_API_KEY, (error, data) => {
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
