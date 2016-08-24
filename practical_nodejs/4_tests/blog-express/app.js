const express = require('express');

const path = require('path');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.all('*', (req, res) => {
	res.render('index', {msg:'Welcome to practical nodeJs!'});
});





var server = http.createServer(app);
var boot = function() {
  server.listen(app.get('port'), () => {
   	console.info('Express server listenong on port ' + app.get('port'));
  });
}

var shutdown = function() {
	server.close();
}

if(require.main === module) {
	boot();
}
else {
	console.info('Running app as a module');
	exports.boot = boot;
	exports.shutdown = shutdown;
	exports.port = app.get('port');
}