var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function total(err, data) {
	console.log(data.split("\n").length - 1);
});

