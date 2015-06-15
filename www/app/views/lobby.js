define([
	'ajax',
	'handlebars',
	'app/model/jogo',
	'text!app/templates/lobby.html'
], function(ajax, Handlebars, jogo, lobbyTemplate) {
	'use strict';

	var lobbyView = {};

	lobbyView.exibir = function() {
		ajax.getJSON('http://localhost:3000/api/jogadoresOnline', function(jogadores) {
			var template = Handlebars.compile(lobbyTemplate);

			document.getElementById('conteudo').innerHTML = template(jogadores);

			registrarEventos();
		});
	};

	function registrarEventos() {
		document.querySelector('ul').addEventListener('click', function(evento) {
			if (evento.target && evento.target.nodeName == "LI")
				selecionarAdversario.apply(evento.target, []);
		});

		document.querySelector('button[data-js="atualizar"]').addEventListener('click', function() {
			lobbyView.exibir();
		});
	}

	function selecionarAdversario() {
		var nome = this.innerHTML;
		var token = this.getAttribute('data-token');

		jogo.selecionarAdversario(nome, token);

		require(['app/views/jogar'], function(jogarView) {
			jogarView.exibir(token);
		});
	}

	return lobbyView;
});