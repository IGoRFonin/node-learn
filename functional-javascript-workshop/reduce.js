module.exports = function(arr) {
	return arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1;
		return countMap;
	}, {});
}