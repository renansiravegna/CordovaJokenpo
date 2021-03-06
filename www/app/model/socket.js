define([
	'app/configuracoes'
], function(configuracoes) {
	var socket = {};
	var socketManager;

	socket.emitir = function(nomeDoEvento, dadosDoEvento) {
		criarSocketManager();
		socketManager.emit(nomeDoEvento, dadosDoEvento);
	};

	socket.escutar = function(nomeDoEvento, callback) {
		criarSocketManager();
		socketManager.on(nomeDoEvento, callback);
	}

	function criarSocketManager() {
		if (socketManager !== undefined) return;

		socketManager = window.io(configuracoes.url);
		socketManager.connect({
			reconnecting: true
		});
	}

	return socket;
});