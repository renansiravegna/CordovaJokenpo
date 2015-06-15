define([
	'handlebars',
	'app/model/consultaDeJogadores',
	'text!app/templates/lobby.html'
], function(Handlebars, consultaDeJogadores, lobbyTemplate) {
	var lobbyView = {};

	lobbyView.exibir = function() {
		var dados = consultaDeJogadores.obterTodos();
		var template = Handlebars.compile(lobbyTemplate);

		document.getElementById('conteudo').innerHTML = template(dados);

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