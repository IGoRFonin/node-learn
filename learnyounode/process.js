'use strict';

var test = 0;
for(let i = 2; i < process.argv.length; i+=1) {
	test += +process.argv[i];
}
console.log(test);