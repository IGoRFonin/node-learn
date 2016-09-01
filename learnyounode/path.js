'use strict';

const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
	list.forEach((item) => {
		if(path.extname(item) == '.md') {
			console.log(item);
		}
	})
})