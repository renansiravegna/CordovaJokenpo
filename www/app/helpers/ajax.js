define([
	'app/configuracoes'
], function(configuracoes) {
	var ajax = {};

	ajax.getJSON = function(url, callback) {
		var xmlHttpRequest = new XMLHttpRequest();

		xmlHttpRequest.onreadystatechange = function() {
			if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
				var resultados = JSON.parse(xmlHttpRequest.responseText);
				callback(resultados);
			}
		};

		xmlHttpRequest.open('GET', configuracoes.url + 'api/jogadoresOnline', true);
		xmlHttpRequest.send();
	};

	return ajax;
});