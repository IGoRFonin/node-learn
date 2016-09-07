'use strict';

const trumpet = require('trumpet');
const through2 = require('through2');
let tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);


var loud = tr.select('.loud').createStream();
loud.pipe(through2(function (buf, enc, next) {
        this.push(buf.toString().toUpperCase());
        next();
})).pipe(loud);