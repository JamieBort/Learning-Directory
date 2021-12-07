// ./utils/geocode.js

const request = require('request');

const weather = (passed_api_key, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=' + passed_api_key + '&query=37.8267,-122.4233';

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('The error is: ' + error, undefined);
		} else if (response.body.error) {
			callback('The new error is: ' + response.body.error, undefined);
		} else {
			callback(
				undefined,
				'The current temperature is ' + response.body.current.temperature + ' degrees Fahrenheit.',
			);
		}
	});
};

module.exports = weather;
