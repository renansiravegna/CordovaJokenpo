define([
	'app/model/socket',
	'app/model/jogador'
], function(socket, jogador) {
	'use strict';

	var jogo = {};

	jogo.entrar = function(apelido) {
		socket.emitir('entrar', apelido);
	};

	return jogo;
});