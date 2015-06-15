define([
	'text!app/templates/resultado.html'
], function(resultadoTemplate) {
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
		require(['app/views/listaDeJogadores'], function(listaDeJogadoresView) {
			listaDeJogadoresView.exibir();
		});
	}

	return resultadoView;
});