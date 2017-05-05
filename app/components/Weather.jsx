var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},	
	handleSearch: function(location) {
		var that = this;
		
		that.setState({
			isLoading: true
		});
		
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage) {
			alert(errorMessage);
			that.setState({
				isLoading: false
			});
		});
	},
	render: function() {
		var {isLoading, location, temp} = this.state;
		function renderMessage() {
			console.log(isLoading, location, temp);
			if (isLoading) {
				return <h3>Fetching data.</h3>
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>
			}
		}
		return (
			<div>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;