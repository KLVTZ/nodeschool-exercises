const Http = require('http');
const Url = require('url');

function onRequest (req, res) {
	var url = Url.parse(req.url, true);
	var result;

	if (/^\/api\/parsetime/.test(req.url)) {
		if (0 !== Object.keys(url.query).length) {
			result = parseTime(new Date(url.query.iso));
		}
	} else if (/^\/api\/unixtime/.test(req.url)) {
		if (0 !== Object.keys(url.query).length) {
			result = unixTime(new Date(url.query.iso));
		}
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
}

function parseTime(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixTime(time) {
	return { unixtime: time.getTime() };
}

var server = Http.createServer(onRequest);
server.listen(Number(process.argv[2]));
