define([
	'handlebars',
	'app/model/jogo',
	'text!app/templates/lobby.html'
], function(Handlebars, jogo, lobbyTemplate) {
	'use strict';

	var lobbyView = {};

	lobbyView.exibir = function(jogadores) {
		var template = Handlebars.compile(lobbyTemplate);

		document.getElementById('conteudo').innerHTML = template(jogadores);

		registrarEventos();
	};

	function registrarEventos() {
		var jogadores = document.querySelectorAll('li');

		for (var index = 0; index < jogadores.length; index++) {
			jogadores[index].addEventListener('click', jogar);
		}
	};

	function jogar() {
		var token = this.innerHTML;

		require(['app/views/jogar'], function(jogarView) {
			jogarView.exibir(token);
		});
	}

	return lobbyView;
});