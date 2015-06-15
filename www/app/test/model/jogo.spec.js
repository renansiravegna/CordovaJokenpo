define([
	'app/model/jogo',
	'app/model/socket'
], function(jogo, socket) {
	describe('Jogo', function() {
		'use strict';

		var apelido;

		beforeEach(function() {
			apelido = 'Renan';
			spyOn(socket, 'emitir');
			spyOn(socket, 'escutar');
		});

		it('deve emitir o evento de entrada no jogo', function() {
			jogo.entrar(apelido, window.callback);

			expect(socket.emitir).toHaveBeenCalledWith('entrar', apelido);
		});
	});
});