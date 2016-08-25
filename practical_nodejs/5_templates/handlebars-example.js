'use strict';

const hb = require('handlebars'),
		fs = require('fs');

var data = {
	title: 'practical node.js',
	author: {
		twitter: '@azat_co',
		name: 'Azat'
	},
	tags: ['express', 'node', 'javascript']
}
data.body = process.argv[2];

fs.readFile('handlebars-example.html', 'utf-8', (err, source) => {
	hb.registerHelper('custom_title', (title) => {
		let words = title.split(' ');
		for(let i = 0; i < words.length; i+=1) {
			words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		}
		title = words.join(' ');
		return title;
	})
	let template = hb.compile(source);
	let html = template(data);
	console.log(html);
});