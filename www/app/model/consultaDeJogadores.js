define(function() {
	var consultaDeJogadores = {};

	consultaDeJogadores.obterTodos = function() {
		return [{
			token: 1,
			nome: 'pia'
		}, {
			token: 2,
			nome: 'mae'
		}, {
			token: 3,
			nome: 'vó'
		}];
	};

	return consultaDeJogadores;
})