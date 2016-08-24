'use strict';
const boot = require('../app').boot,
	  shutdown = require('../app').shutdown,
	  port = require('../app').port,
	  superagent = require('superagent'),
	  expect = require('expect.js');

describe('server', () => {
	before(() => {
		boot();
	});
	describe('homepage', () => {
		it('should respond to GET', (done) => {
			superagent
			  .get('http://localhost:' + port)
			  .end((err, res) => {
			  	expect(res.status).to.eql(200);
			  	done()
			});
		});
	});
	after(() => {
		shutdown();
	})
})

