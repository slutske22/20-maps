const express = require('express');
const cors = require('cors');
const corsAnywhere = require('cors-anywhere');
const path = require('path');

const port = process.env.PORT || 3030;
process.env.PWD = process.cwd();

var app = express();

let proxy = corsAnywhere.createServer({
	originWhitelist: [], // Allow all origins
	requireHeaders: [], // Do not require any headers.
	removeHeaders: [], // Do not remove any headers.
});

app.use(cors());

app.get('/proxy/:proxyUrl*', (req, res) => {
	req.url = req.url.replace('/proxy/https:/', '/https://');
	proxy.emit('request', req, res);
});

app.use(express.static(path.join(process.env.PWD, 'dist')));

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
