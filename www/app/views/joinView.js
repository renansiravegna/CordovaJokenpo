define([
	'text!app/templates/entrar.html',
	'app/model/socket'
], function(entrarTemplate, socket) {
	'use strict';

	var entrarView = {};

	entrarView.show = function() {
		document.getElementById('conteudo').innerHTML = entrarTemplate;
		document.querySelector('button[data-js="entrar"]').addEventListener('click', enviarNome);
	};

	entrarView.hide = function() {
		document.querySelector('button[data-js="entrar"]').removeEventListener('click', enviarNome);
	};

	function enviarNome() {
		require([
			'app/model/jogo',
			'router'
		], function(jogo, router) {
			var apelido = document.getElementById('apelido').value;

			jogo.entrar(apelido, function() {
				router.navigateTo('/lobby');
			});
		});
	}

	return entrarView;
});