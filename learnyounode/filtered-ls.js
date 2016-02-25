var fs = require('fs');
var path = require('path');
var extension = process.argv[3];

fs.readdir(process.argv[2], function items (error, list) {
	list.forEach(function only (file) {
		if (path.extname(file).slice(1) === extension) {
			console.log(file);
		}
	});
});
