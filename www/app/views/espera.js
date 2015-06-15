define([
	'text!app/templates/espera.html'
], function(esperaTemplate) {
	var esperaView = {};

	esperaView.exibir = function() {
		var template = Handlebars.compile(esperaTemplate);
		document.getElementById('conteudo').innerHTML = template("Renan");

		setTimeout(exibirResultado, 1500);
	};

	function exibirResultado() {
		require(['app/views/resultado'], function(resultadoView) {
			resultadoView.exibir();
		});
	}

	return esperaView;
});