const util = require('util'),
			mongodb = require('mongodb');

const mongo = require('mongodb'),
			dbHost = '127.0.0.1',
			dbPort = 27017;

const Db = mongo.Db;
const Connection = mongo.Connction;
const Server = mongo.Server;
const db = new Db('local', new Server(dbHost, dbPort), {safe:true});

db.open((err, dbConnection) => {

	if(err) {
		console.error(err);
		process.exit(1);
	}
	console.log(db._state);
	db.close()
});

