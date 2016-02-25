const Http = require('http');
const Map = require('through2-map');

var server = Http.createServer(function cb (req, res) {
	if (req.method === 'POST') {
		req.pipe(Map(function cb(chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

server.listen(Number(process.argv[2]));
