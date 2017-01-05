const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// Server static files from "/public"
// To access "/public/images/foo.png" user src="/images/foo.png".
app.use(express.static('public'))

// Always respond with the index.html file.
app.get('*', function(req, res, next){
	res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);

console.log('Web server listening on:', port);