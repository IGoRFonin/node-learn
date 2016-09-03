'use strict';

const http = require('http');
const map = require('through2-map');



http.createServer((req, res) => {
	if(req.method != 'POST') {
		return res.end('send me a POST\n');
	}
		req.pipe(map((data) => {
			return data.toString().toUpperCase();
		})).pipe(res);
}).listen(process.argv[2]);



// var writestream = new stream.Stream()
// writestream.writable = true


// writestream.write({number: 1})