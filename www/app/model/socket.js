define(function() {
	var socket = {};
	var socketManager;

	socket.emitir = function(nomeDoEvento, dadosDoEvento) {
		if (socketManager === undefined) {
			socketManager = window.io("http://localhost:3000/");
			socketManager.connect();
		}

		socketManager.emit(nomeDoEvento, dadosDoEvento);
	};

	socket.escutar = function(nomeDoEvento, callback) {
		if (socketManager === undefined) {
			socketManager = window.io("http://localhost:3000/");
			socketManager.connect();
		}

		socketManager.on(nomeDoEvento, callback);
	}

	return socket;
});