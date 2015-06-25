define([
	'ajax',
	'app/configuracoes',
	'handlebars',
	'app/model/jogo',
	'text!app/templates/lobby.html'
], function(ajax, configuracoes, Handlebars, jogo, lobbyTemplate) {
	'use strict';

	var lobbyView = {};

	lobbyView.exibir = function() {
		ajax.getJSON(configuracoes.url + 'api/jogadoresOnline', function(jogadores) {
			var template = Handlebars.compile(lobbyTemplate);

			console.log(jogadores);
			document.getElementById('conteudo').innerHTML = template(jogadores);

			registrarEventos();
		});
	};

	function registrarEventos() {
		document.querySelector('ul').addEventListener('click', function(evento) {
			if (evento.target && evento.target.nodeName == "LI")
				desafiarJogador.apply(evento.target, []);
		});

		document.querySelector('button[data-js="atualizar"]').addEventListener('click', function() {
			lobbyView.exibir();
		});

		document.querySelector('button[data-js="sair"]').addEventListener('click', function() {
			require([
				'app/model/socket',
				'app/views/entrar'
			], function(socket, entrarView) {
				socket.emitir('disconnect');
				entrarView.exibir();
			});
		});
	}

	function desafiarJogador() {
		var token = this.getAttribute('data-token');
		var apelido = this.getAttribute('data-apelido');

		jogo.desafiarJogador(apelido, token);

		require(['app/views/jogar'], function(jogarView) {
			jogarView.exibir(token);
		});
	}

	return lobbyView;
});