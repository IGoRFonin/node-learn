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

jade.renderFile('jade-example.jade', data, (err, html) => {
	console.log(html);
});