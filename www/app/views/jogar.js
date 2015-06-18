define([
	'text!app/templates/jogar.html',
	'app/model/jogo'
], function(jogarTemplate, jogo) {
	'use strict';

	var jogarView = {};
	var jogadaSelecionada;

	jogarView.exibir = function() {
		document.getElementById('conteudo').innerHTML = jogarTemplate;
		registrarEventos();
	};

	function registrarEventos() {
		var jogadas = document.querySelectorAll('div#jogadas div');

		for (var index = 0; index < jogadas.length; index++) {
			jogadas[index].addEventListener('click', selecionar);
		}

		document.querySelector('button').addEventListener('click', confirmarJogada);
	}

	function selecionar() {
		jogadaSelecionada = this;

		var jogadas = document.querySelectorAll('div#jogadas div');

		for (var index = 0; index < jogadas.length; index++)
			jogadas[index].className = '';

		this.className = 'selecionado';
		jogo.selecionarJogada(this.getAttribute('data-jogada'));
	}

	function confirmarJogada() {
		require([
			'app/views/espera',
			'app/views/resultado'
		], function(esperaView, resultadoView) {
			esperaView.exibir();
			jogo.jogar(resultadoView.exibir);
		});
	}

	return jogarView;
});