define([
	'director'
], function() {
	var router = {};

	router.configure = function() {
		var routes = {
			'/join': function() {
				console.log('/join');
			}
		};

		var director = Router(routes);
		director.init();
		configureEvents();
	};

	router.navigateTo = function(route) {
		window.location = "#" + route;
	};

	function configureEvents() {
		document.querySelector('#conteudo').addEventListener('click', function(event) {
			if (!event.target) return;

			var route = event.target.getAttribute('data-route');

			if (route !== undefined)
				router.navigateTo(route);
		});
	};

	return router;
});