var mymodule = require('./mymodule');
var directory = process.argv[2];
var filterString = process.argv[3];

mymodule(directory, filterString, function message (err, data) {
	if (err)
		return console.error('There was an error:', err);

	data.forEach(function print (item) {
		console.log(item);
	});
});
