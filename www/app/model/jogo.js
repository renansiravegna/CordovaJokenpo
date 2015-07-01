define([
	'app/model/socket',
	'app/model/jogador'
], function(socket, jogador) {
	'use strict';

	var jogo = {};

	jogo.entrar = function(apelido, callback) {
		jogo.meuApelido = apelido;
		socket.emitir('entrar', apelido);
		socket.escutar('entrada-registrada', callback);
	};

	jogo.desafiarJogador = function(token, callback) {
		socket.emitir('desafiar-jogador', token);
		callback();
	};

	jogo.selecionarJogada = function(jogada) {
		jogo.minhaJogada = jogada;
	};

	jogo.jogar = function(callback) {
		var jogada = { tokenDoAdversario: jogo.tokenDoAdversario, jogada: jogo.minhaJogada };
		socket.escutar('jogadaVencedora', callback);
		socket.emitir('jogada', jogada);
	};

	return jogo;
});