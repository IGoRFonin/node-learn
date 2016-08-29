const mongo = require('mongodb'),
			dbHost = '127.0.0.1',
			dbPort = 27017;

const Db = mongo.Db;
const Connection = mongo.Conntection;
const Server = mongo.Server;
const db = new Db('local', new Server(dbHost, dbPort), {safe:true});

db.open((err, dbConnection) => {
	if(err) {
		console.error(err);
		process.exit(1);
	}

	console.log('db state: ', db._state);
	item = {
		name: 'Azat',
	}
	dbConnection.collection('messages').insert(item, (err, item) =>{
		if(err) {
			console.error(err);
			process.exit(1);
		}

		console.info('created/inserted: ', item);
		process.exit(0);
	});
});