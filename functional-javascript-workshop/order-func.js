module.exports = function(fn, num) {
	for(var i = 0; i<= num; i+=1) {
		fn();
	}
}