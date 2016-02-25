const Net = require('net');
const Strftime = require('strftime');


var server = Net.createServer(function cb(socket) {
	socket.end(Strftime('%Y-%m-%d %H:%M', new Date()) + "\n");
});

server.listen({
	host: 'localhost',
	port: process.argv[2]
});
