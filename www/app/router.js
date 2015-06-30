define([
	'app/views/emptyView',
	'director'
], function(emptyView) {
	'use strict';

	var router = {};
	var _activeView = emptyView;

	router.configure = function() {
		var routes = {
			'/join': function() {
				require(['app/views/joinView'], function(joinView) {
					changeView(joinView);
				});
			},

			'/lobby': function() {
				require(['app/views/lobbyView'], function(lobbyView) {
					changeView(lobbyView);
				});
			}
		};

		var director = Router(routes);
		director.init();
		configureEvents();
	};

	router.navigateTo = function(route) {
		window.location = "#" + route;
	};

	function changeView(view) {
		_activeView.hide();
		_activeView = view;

		view.show();
	}

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