define([
	'handlebars',
	'text!app/templates/espera.html',
	'app/model/jogo',
	'app/model/socket'
], function(Handlebars, esperaTemplate, jogo, socket) {
	'use strict';

	var esperaView = {};

	esperaView.exibir = function() {
		var template = Handlebars.compile(esperaTemplate);
		document.getElementById('conteudo').innerHTML = template(jogo.nomeDoAdversario);
		atribuirEventos();
	};

	function atribuirEventos() {
		socket.escutar('jogadaVencedora', exibirResultado);
	}

	function exibirResultado(resposta) {
		require(['app/views/resultado'], function(resultadoView) {
			resultadoView.exibir(resposta);
		});
	}

	return esperaView;
});