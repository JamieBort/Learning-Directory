// ./app.js
require('dotenv').config();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.env.FORECAST_API_KEY);
// console.log(process.env);

console.clear();
const address = process.argv[2];
if (!address) {
	console.log('Please provide an address.');
	// address = process.argv[2];
} else {
	geocode(address, process.env.GEOCODE_API_KEY, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return console.log('The geocode error: ', error);
		}
		// console.log('data: ', data);
		forecast(latitude, longitude, process.env.FORECAST_API_KEY, (error, { temperature }) => {
			if (error) {
				return console.log('The forecast error: ', error);
			}
			console.log('In ' + location + ' the temperature is ' + temperature + ' degrees.');
			// console.log('forecastData: ', forecastData);
		});
	});
}

// geocode('Philadelphia', process.env.GEOCODE_API_KEY, (error, data) => {
// 	if (error) {
// 		return console.log('The geocode error: ', error);
// 	}
// 	// console.log('data: ', data);
// 	forecast(data.latitude, data.longitude, process.env.FORECAST_API_KEY, (error, forecastData) => {
// 		if (error) {
// 			return console.log('The forecast error: ', error);
// 		}
// 		console.log('In ' + data.location + ' the temperature is ' + forecastData.temperature + ' degrees.');
// 		// console.log('forecastData: ', forecastData);
// 	});
// });
