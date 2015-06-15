define([
	'handlebars',
	'text!app/templates/resultado.html'
], function(Handlebars, resultadoTemplate) {
	'use strict';

	var resultadoView = {};

	resultadoView.exibir = function(resultado) {
		var template = Handlebars.compile(resultadoTemplate);
		document.getElementById('conteudo').innerHTML = template(resultado.jogadaVencedora);

		registrarEventos();
	};

	function registrarEventos() {
		document.querySelector('button[data-js="jogar-novamente"]').addEventListener('click', jogarNovamente);
	}

	function jogarNovamente() {
		require(['app/views/jogar'], function(jogarView) {
			jogarView.exibir();
		});
	}

	return resultadoView;
});