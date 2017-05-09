var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=16e97925e4889cc62dd12a14db969863&units=metric';

module.exports = {
	getTemp: function (location) {
		var encodedlocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedlocation}`;
		
		return axios.get(requestUrl).then(function(res){
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}; 