'use strict';

const Buffer = require('buffer').Buffer;


let test = [];
for(let i = 2; i<process.argv.length; i+=1) {
	test.push(process.argv[i]);
}
let buf = new Buffer(test);
console.log(buf.toString('hex'));