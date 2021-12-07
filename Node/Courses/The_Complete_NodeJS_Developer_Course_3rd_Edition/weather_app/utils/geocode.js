// ./utils/geocode.js

const request = require('request');
const geocode = (address, passed_api_key, callback) => {
	console.log('address: ', address);
	const url =
		'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
		encodeURIComponent(address) +
		'.json?access_token=' +
		passed_api_key;

	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to services.', undefined);
		} else if (body.features.length === 0) {
			callback("The location doesn't exist.", undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name,
				// body: response.body,
			});
		}
	});
};

module.exports = geocode;
