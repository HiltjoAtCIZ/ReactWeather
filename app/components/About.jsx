var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1 className="text-center">About</h1>
				<div>
					This site is hosted on <a href='http://shrouded-lowlands-86363.herokuapp.com'>Heroku</a>. 
					The source code can be found at <a href='https://github.com/HiltjoAtCIZ/ReactWeather'>GitHub</a>.
				</div>
			</div>
		);
	}
});

module.exports = About;