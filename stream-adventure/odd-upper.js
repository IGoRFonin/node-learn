'use strict';

const through2 = require('through2');
const split = require('split');
let stream = through2(write, end);
var i = 0;

function write (buffer, encoding, next) {
		if(i%2) {
			this.push(buffer.toString().toUpperCase());	
		} else {
			this.push(buffer.toString());
		}
    i++;
    next();
}

function end (done) {
	done();
}

process.stdin.pipe(stream).pipe(process.stdout);