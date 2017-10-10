var react = require('react');
var link = require('react-router');

module.exports = react.createClass({
  render.function(){
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
});