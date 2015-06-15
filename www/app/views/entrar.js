define([
	'text!app/templates/entrar.html',
	'app/views/listaDeJogadores'
], function(entrarTemplate, listaDeJogadores) {
	var entrarView = {};

	entrarView.exibir = function() {
		document.getElementById('conteudo').innerHTML = entrarTemplate;
		registrarEventos();
	};

	function registrarEventos() {
		document.querySelector('#botao').addEventListener('click', enviarNome, false);
	}

	function enviarNome() {
		var nome = document.getElementById('nomeDoJogador').value;		
		listaDeJogadores.exibir(nome);
	}

	return entrarView;
});