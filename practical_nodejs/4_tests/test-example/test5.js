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
	it('should return the same array', () => {
		expect(expected.length).to.equal(current.length);
		for(let i = 0; i < expected.length; i+=1) {
			expect(expected[i]).equal(current[i]);
		}
	})
})