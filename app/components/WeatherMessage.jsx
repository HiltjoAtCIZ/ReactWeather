var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var location = this.props.location;
		var temp = this.props.temp;
		return (
			<h3 className="text-center">
				The temperature in {location} is {temp}
			</h3>
		);
	}
});

module.exports = WeatherMessage;