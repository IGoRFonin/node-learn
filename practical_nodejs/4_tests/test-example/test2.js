'use strict';

const assert = require('assert');

describe('String#split', () => {
	it('should return an array', () => {
		assert(Array.isArray('a,b,c'.split(',')));
	});
	it('should return the same array', () => {
		assert.equal(['a','b','c'].length, 'a,b,c'.split(',').length, 'arrays have equal length');
		for(let i = 0; i < ['a','b','c'].length; i+=1) {
			assert.equal(['a','b','c'][i], 'a,b,c'.split(',')[i], i + ' element is equal');
		};
	})
})