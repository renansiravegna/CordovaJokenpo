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

		it('deve emitir o evento de entrada no jogo e esperar o retorno', function() {
			var callback = function() {};

			jogo.entrar(apelido, callback);

			expect(socket.emitir).toHaveBeenCalledWith('entrar', apelido);
			expect(socket.escutar).toHaveBeenCalledWith('entrada-registrada', callback);
		});
	});
});