var express = require('express');
var app = express();

app.use(express.static('public'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
