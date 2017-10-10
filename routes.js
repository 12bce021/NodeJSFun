var react = require('react');
var route, indexRoute = require('react-router');
var indexPage = require('../components/Index');
var notFoundPage = require('../components/NotFound');

const routes = (
  <route path="/" component={Layout}>
    <indexRoute component={indexPage}/>
    <route path="*" component={notFoundPage}/>
  </route>
);


module.exports =  routes;