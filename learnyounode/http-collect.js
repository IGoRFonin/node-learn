'use strict';

const http = require('http');
const BufferList = require('bl');

let bl = new BufferList();
http.get(process.argv[2], (res) => {
	res.pipe(BufferList(function(err, data) {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})

 // var http = require('http')
 // var bl = require('bl')

 // http.get(process.argv[2], function (res) {
 //   res.pipe(bl(function (err, data) {
 //     data = data.toString()
 //     console.log(data.length)
 //     console.log(data)
 //   }))
 // })