var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8000
app.use(express.static(path.join(__dirname, '/public')));

//routes
app.get('/', function (req, res) {
	res.sendFile(path.resolve('public/My_portfolio.html'));
})

app.listen(port,function() {
	console.log("App Running");
})
