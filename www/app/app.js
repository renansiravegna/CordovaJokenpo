window.app = {};

app.configurar = function() {
	var configuracoes = {
		baseUrl: '',

		paths: {
			'ajax': 'app/helpers/ajax',
			'text': 'app/lib/requirejs-text/text',
			'handlebars': 'app/lib/handlebars/handlebars',
			'director': 'app/lib/director/build/director',
			'router': 'app/router'
		}
	};

	require.config(configuracoes);
};

app.iniciar = function() {
	app.configurar();

	require([
		'router',
		'app/views/entrar'
	], function(router, entrarView) {
		router.configure();
		router.navigateTo('/join');
	});
};

if (!window.cordova)
	app.iniciar();
else
	document.addEventListener('deviceready', app.iniciar, false);