window.app = {};

app.configurar = function() {
	var configuracoes = {
		baseUrl: '',

		paths: {
			'ajax': 'app/helpers/ajax',
			'text': 'app/lib/requirejs-text/text',
			'handlebars': 'app/lib/handlebars/handlebars'
		}
	};

	require.config(configuracoes);
};

app.iniciar = function() {
	app.configurar();

	require(['app/views/entrar'], function(entrarView) {
		entrarView.exibir();
	});
};

if (!window.cordova)
	app.iniciar();
else
	document.addEventListener('deviceready', app.iniciar, false);