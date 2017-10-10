var react = require('react');
var route, browserHistory = require('react-router');
var routes = require('../routes');

module.exports = react.createClass({
	render.function(){
		return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
	}
});