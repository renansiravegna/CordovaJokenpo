define([
	'ajax',
	'app/configuracoes',
	'handlebars',
	'app/model/jogo',
	'text!app/templates/lobby.html'
], function(ajax, configuracoes, Handlebars, jogo, lobbyTemplate) {
	'use strict';

	var lobbyView = {};

	lobbyView.show = function() {
		ajax.getJSON(configuracoes.url + 'api/jogadoresOnline', function(jogadores) {
			var template = Handlebars.compile(lobbyTemplate);

			document.getElementById('conteudo').innerHTML = template(jogadores);

			document.querySelector('ul').addEventListener('click', desafiarJogador);
			document.querySelector('button[data-js="sair"]').addEventListener('click', sair);
		});
	};

	lobbyView.hide = function() {
		document.querySelector('ul').removeEventListener('click', desafiarJogador);
		document.querySelector('button[data-js="sair"]').removeEventListener('click', sair);
	};

	function desafiarJogador(event) {
		if (!event.target || event.target.nodeName !== 'LI') return;

		var token = this.getAttribute('data-token');

		jogo.desafiarJogador(token, function() {
			var newClassName = event.target.children[1].className.replace('ion-alert', 'ion-help');
			event.target.children[1].className = newClassName;
		});
	}

	function sair() {
		require([
			'app/model/socket',
			'router'
		], function(socket, router) {
			socket.emitir('sair');
			router.navigateTo('/join');
		});
	}

	return lobbyView;
});