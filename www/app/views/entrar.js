define([
	'text!app/templates/entrar.html',
], function(entrarTemplate, listaDeJogadores) {
	var entrarView = {};

	entrarView.exibir = function() {
		document.getElementById('conteudo').innerHTML = entrarTemplate;
		registrarEventos();
	};

	function registrarEventos() {
		document.querySelector('button[data-js="entrar"]').addEventListener('click', enviarNome, false);
	}

	function enviarNome() {
		require(['app/views/lobby'], function(lobbyView) {
			var nome = document.getElementById('apelido').value;
			lobbyView.exibir(nome);
		});
	}

	return entrarView;
});