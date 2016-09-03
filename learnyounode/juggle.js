var http = require("http");
var bl = require("bl");
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var result = [];

urls.forEach(function (url, index) {
    http.get(url, function (res) {
        res.pipe(bl(function (err, data) {
        	console.log(data.toString());
            // result[index] = data.toString();
        }))
    })
})

// for (var i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }