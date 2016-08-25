'use strict';

const jade = require('jade'),
	  fs = require('fs');

let data = {
	title: "Practical Node.js",
	author: {
		twitter: "@azat_co",
		name: "Azat"
	},
	tags: ['express', 'node', 'javascript']
}
data.body = process.argv[2];

fs.readFile('jade-example.jade', 'utf-8', (err, cont) => {
	let html = jade.render(cont, data);
	console.log(html);
})