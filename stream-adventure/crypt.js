'use strict';

const crypto = require('crypto');
const through = require('through');
let stream = crypto.createDecipher('aes256', process.argv[2]);

// process.stdin.pipe(through( function(buf, _, next) {
// 	this.push(crypto.createDecipher(process.argv[2], buf));

// })).pipe(process.stdout);

process.stdin.pipe(stream).pipe(process.stdout);
// stream.write(Buffer([ 135, 197, 164, 92, 129, 90, 215, 63, 92 ]));
// stream.end();