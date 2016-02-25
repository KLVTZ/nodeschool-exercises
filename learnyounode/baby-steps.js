var total = 0;

function sum(options, callback) {
	for (var i = 0, l = options.length; i < l; i++) {
		total += +options[i];
	}
	callback();
}

sum(process.argv.slice(2), function message() {
	console.log(total);
});
