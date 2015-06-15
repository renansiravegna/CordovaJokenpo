define([
	'text!app/templates/entrar.html',
	'app/model/socket'
], function(entrarTemplate, socket) {
	'use strict';

	var entrarView = {};

	entrarView.exibir = function() {
		document.getElementById('conteudo').innerHTML = entrarTemplate;
		registrarEventos();
	};

	function registrarEventos() {
		document.querySelector('button[data-js="entrar"]').addEventListener('click', enviarNome, false);
	}

	function enviarNome() {
		require([
			'app/model/jogo',
			'app/views/lobby'
		], function(jogo, lobbyView) {
			var apelido = document.getElementById('apelido').value;

			jogo.entrar(apelido, function() {
				lobbyView.exibir();
			});
		});
	}

	return entrarView;
});