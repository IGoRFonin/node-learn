'use strict';

const request = require('request');
const th = require('through2');

process.stdin
.pipe(request.post("http://localhost:8099"))
.pipe(process.stdout)
