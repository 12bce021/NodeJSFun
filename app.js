const express = require('express');
const app = express();

app.get("/", function(req, res) {
	res.send('Rick Sanchez we know is not the C-137 Morty\'s Rick :P')
});


module.exports = app;
