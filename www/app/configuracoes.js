define(function() {
	var configuracoes = {};

	configuracoes.host = 'localhost';

	configuracoes.porta = 3330;

	configuracoes.url = 'http://' + configuracoes.host + ':' + configuracoes.porta + '/';

	return configuracoes;
});