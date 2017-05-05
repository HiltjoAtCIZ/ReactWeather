var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var location = this.props.location;
		var temp = this.props.temp;
		return (
			<div>
				The temperature in {location} is {temp}
			</div>
		);
	}
});

module.exports = WeatherMessage;