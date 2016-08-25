'use strict';

const expect = require('expect.js');

let expected, current;
before(() => expected = ['a', 'b', 'c']);
describe('String#split', () => {
	beforeEach(() => {
		current = 'a,b,c'.split(',');
	});
	it('sould return an array', () => {
		expect(Array.isArray(current)).to.be.true;
	});
})