'use strict';

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Tipe' : 'application/json'});
	var json = url.parse(req.url, true);
	var date = new Date(json.query.iso);
	var path = json.pathname.substring(1).split('/')[1];

	if(path == "parsetime") {
		var outData = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}
	} else if(path == 'unixtime') {
		var outData = {
			unixtime:	date.getTime()
		}
	}
	res.end(JSON.stringify(outData));
}).listen(process.argv[2]);