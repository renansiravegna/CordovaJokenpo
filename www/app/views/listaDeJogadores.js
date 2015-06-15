define([
	'text!app/templates/listaDeJogadores.html'
], function(listaDeJogadoresTemplate) {
	var listaDeJogadores = {};

	listaDeJogadores.exibir = function() {
		var dados = [{
			token: 1,
			nome: 'pia'
		}, {
			token: 2,
			nome: 'mae'
		}, {
			token: 3,
			nome: 'vó'
		}];
		var listaDeJogadoresView = Handlebars.compile(listaDeJogadoresTemplate);

		document.getElementById('conteudo').innerHTML = listaDeJogadoresView(dados);

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

	return listaDeJogadores;
});