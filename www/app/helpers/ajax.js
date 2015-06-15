define(function() {
	var ajax = {};

	ajax.getJSON = function(url, callback) {
		var xmlHttpRequest = new XMLHttpRequest();

		xmlHttpRequest.onreadystatechange = function() {
			if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
				var resultados = JSON.parse(xmlHttpRequest.responseText);
				callback(resultados);
			}
		}

		xmlHttpRequest.open("GET", "http://localhost:3000/api/jogadoresOnline", true);
		xmlHttpRequest.send();
	};

	return ajax;
});