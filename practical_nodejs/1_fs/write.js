const fs = require('fs');

fs.writeFile(__dirname + '/data/message.txt', 'Hello World!', function(err){
	if(err) throw err;
	console.log('Writing is done.');
})