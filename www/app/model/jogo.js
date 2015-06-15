define(function() {
	'use strict';

	var jogo = {};

	jogo.entrar = function(apelido, callback) {
		require([
			'app/model/socket',
			'app/model/jogador'
		], function(socket, jogador) {
			socket.emitir('entrar', function(token) {
				jogador.inserirToken(token);
				jogador.inserirApelido(apelido);

				callback();
			});
		});
	};

	jogo.obterJogadores = function() {
		return [{
			token: 1,
			apelido: 'pia'
		}, {
			token: 2,
			apelido: 'mae'
		}, {
			token: 3,
			apelido: 'vó'
		}];
	};

	return jogo;
});