'use strict';

const net = require('net');
const strftime = require('strftime');

net.createServer((socket) => {
	let data = strftime('%F %R', new Date());
	socket.write(data);
	socket.end("\n");
}).listen(process.argv[2]);