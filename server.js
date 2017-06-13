/* REQUIRES */
var express = require('express');
var app = express();
var path = require('path');

/* USES */
app.use(express.static('public'));

// Base URL
app.get('/', function(req, res) {
	res.sendFile(path.resolve('public/views/index.html'));

});

// Listen
app.listen(process.env.PORT || 3000);
