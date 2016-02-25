var http = require('http');
var collection = '';

http.get(process.argv[2], function cb (response) {
	response.setEncoding('utf8');

	response.on('data', function emit (data) {
		collection += data;
	});

	response.on('end', function emit () {
		console.log(collection.length);
		console.log(collection);
	});

	response.on('error', console.error);
});
