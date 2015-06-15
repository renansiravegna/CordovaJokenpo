define(function() {
	var socket = {};

	socket.emitir = function(nomeDoEvento, callback) {
		callback(123456);
	};

	return socket;
});