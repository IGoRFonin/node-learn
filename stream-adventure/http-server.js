'use strict';

const http = require('http');
const through = require('through2');

http.createServer((req, res) => {
	if(req.method === "POST") {
		req.pipe(through(to_upper)).pipe(res);
	}
}).listen(process.argv[2])

function to_upper(buffer, _, next) {
	this.push(buffer.toString().toUpperCase())
	next()
}
