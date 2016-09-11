'use strict';

const crypto = require('crypto');
const cipher = process.argv[2];
const passphrase = process.argv[3];
const decrypter = crypto.createDecipher(cipher, passphrase);

const gunzip = require('zlib').createGunzip();

const through = require('through');
const parser  = require('tar').Parse();
parser.on('entry', (e) => {
	if(e.type !== 'File') return;
	console.log(e);
	var name = e.path;
	var hasher = crypto.createHash('md5');
	e.pipe(hasher).pipe(through((hash_buffer) => {
		var hash = hash_buffer.toString('hex');
		process.stdout.write(hash + ' ' + name + '\n');
	}))
})

process.stdin.pipe(decrypter).pipe(gunzip).pipe(parser);
