define([
	'text!app/templates/jogar.html'
], function(jogarTemplate) {
	var jogarView = {};
	var jogadaSelecionada;

	jogarView.exibir = function(token) {
		document.getElementById('conteudo').innerHTML = jogarTemplate;
		registrarEventos();
	};

	function registrarEventos() {
		var jogadas = document.querySelectorAll('li');

		for (var index = 0; index < jogadas.length; index++) {
			jogadas[index].addEventListener('click', selecionar);
		}

		document.querySelector('button').addEventListener('click', confirmarJogada);
	}

	function selecionar() {
		jogadaSelecionada = this;

		var jogadas = document.querySelectorAll('li');

		for (var index = 0; index < jogadas.length; index++) {
			jogadas[index].style.border = "";
		}

		this.style.border = "1px solid blue";
	}

	function confirmarJogada() {
		console.log(jogadaSelecionada);
		// Emitir evento para o socket

		require(['app/views/espera'], function(esperaView) {
			esperaView.exibir();
		});
	}

	return jogarView;
});