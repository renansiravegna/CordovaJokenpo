define(function() {
	'use strict';

	var apelido, token;
	
	var jogador = {
		get apelido () {
			return apelido;
		}
	};

	jogador.inserirToken = function(novoToken) {
		token = novoToken;
	};

	jogador.inserirApelido = function(novoApelido) {
		apelido = novoApelido;
	};

	return jogador;
});