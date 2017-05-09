var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},	
	handleSearch: function(location) {
		var that = this;
		
		that.setState({
			isLoading: true,
			errorMessage: undefined
		});
		
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(e) { 
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},
	render: function() {
		var {isLoading, location, temp, errorMessage} = this.state;
		function renderMessage() {
			console.log(isLoading, location, temp, errorMessage); 
			if (isLoading) {
				return <h3 className="text-center">Fetching data.</h3>
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>
			}
		}
			
		function renderError() {
			console.log("renderError", errorMessage	)
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}
		
		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;