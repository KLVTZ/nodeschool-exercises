const Http = require('http');
const BufferList  = require('bl');
var results = [];
var count = 0;


juggle(process.argv.slice(2), function message (err, data) {
	if (err) {
		console.error(err);
	}

	for (var i = 0, l = data.length; i < l; i++) {
		console.log(data[i]);
	}
});

function juggle (collection, callback) {
	for (var i = 0, l = collection.length; i < l; i++) {
		httpGet(collection[i], i, callback);
	}
}

function httpGet (url, index, callback) {
	Http.get(url, function cb (response) {

		response.pipe(BufferList(function cb (err, data) {
			if (err) {
				return callback(err)
			}

			results[index] = data.toString();
			count++;

			if (count === 3) {
				callback(null, results)
			}
		}));
	});
}
