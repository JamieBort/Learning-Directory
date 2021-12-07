// ./utils/geocode.js

const request = require('request');

const forecast = (latitude, longitude, passed_api_key, callback) => {
	const url =
		'http://api.weatherstack.com/current?access_key=' +
		passed_api_key +
		'&query=' +
		latitude +
		',' +
		longitude +
		'&units=f';

	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			callback('The error is: ' + error, undefined);
		} else if (body.error) {
			callback('The new error is: ' + body.error, undefined);
		} else {
			callback(undefined, {
				// name: response.body.location.name,
				// region: response.body.location.region,
				temperature: body.current.temperature,
				// location: response.Data.location,
				// all: response,
			});
		}
	});
};

module.exports = forecast;
