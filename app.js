var react = require('react');
var reactDOM = require('react-dom');
var appRoutes = require('../components/AppRoutes');

window.onload = () => {
  reactDOM.render(<appRoutes/>, document.getElementById('main'));
};
