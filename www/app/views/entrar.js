define([
	'text!app/templates/entrar.html',
	'app/model/socket'
], function(entrarTemplate, socket) {
	'use strict';

	var entrarView = {};
	var dados;

	entrarView.exibir = function() {
		document.getElementById('conteudo').innerHTML = entrarTemplate;
		registrarEventos();
		configurarSocket();
	};

	function registrarEventos() {
		document.querySelector('button[data-js="entrar"]').addEventListener('click', enviarNome, false);
	}

	function configurarSocket() {
		socket.escutar('jogadores', teste);
	}

	function teste(jogadores) {
		console.log(jogadores);
	}

	function enviarNome() {
		require(['app/model/jogo'], function(jogo) {
			var apelido = document.getElementById('apelido').value;
			jogo.entrar(apelido);
		});
	}

	function irAoLobby(jogadores) {
		require(['app/views/lobby'], function(lobbyView) {
			lobbyView.exibir(jogadores);
		});
	}

	return entrarView;
});