var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
	fs.readdir(directory, function items (error, list) {
		if (error) {
			return callback(error);
		}
		data = list.filter(function only (file) {
			return path.extname(file).slice(1) === extension;
		});

		callback(null, data);
	});
};
