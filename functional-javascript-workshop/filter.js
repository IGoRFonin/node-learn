module.exports = function(message) {
	var m = [];
	for(var i = 0; i < message.length; i+=1) {

		if(message[i].message.length <= 50)
			m.push(message[i].message);
		
		
	}
	return m;
}