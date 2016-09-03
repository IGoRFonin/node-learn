'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	let stream = fs.createReadStream(process.argv[3]);
	stream.pipe(res);
}).listen(process.argv[2])