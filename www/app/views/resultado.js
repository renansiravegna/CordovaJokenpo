define([
	'handlebars',
	'text!app/templates/resultado.html'
], function(Handlebars, resultadoTemplate) {
	'use strict';

	var resultadoView = {};

	resultadoView.exibir = function() {
		var template = Handlebars.compile(resultadoTemplate);
		document.getElementById('conteudo').innerHTML = template('Renan');

		registrarEventos();
	};

	function registrarEventos() {
		document.querySelector('button').addEventListener('click', reiniciar);
	}

	function reiniciar() {
		require(['app/views/lobby'], function(lobbyView) {
			lobbyView.exibir();
		});
	}

	return resultadoView;
});