import { fazerLogin } from '../src/gerenciarLogin.js';
import assert from 'node:assert';

describe('Testes do Desafio de Login', function () {

    it('Sucesso: Validar login com credenciais corretas', function () {
        // Act
        const resultado = fazerLogin('alice@teste.com', '123');

        // Assert
        assert.equal(resultado, 'Login realizado com sucesso');
    });

    it('Credencial expirada: Validar mensagem de renovação', function () {
        // Act
        const resultado = fazerLogin('davi@teste.com', '456');

        // Assert
        assert.equal(resultado, 'Renove suas credenciais');
    });

    it('Usuário não encontrado: Validar busca por email inexistente', function () {
        // Act
        const resultado = fazerLogin('nao_existe@teste.com', '123');

        // Assert
        assert.equal(resultado, 'Usuário não encontrado');
    });

    it('Senha incorreta: Validar erro para senha errada em usuário existente', function () {
        // Act
        const resultado = fazerLogin('l@teste.com', 'teste123');

        // Assert
        assert.equal(resultado, 'Senha incorreta');
    });

    it('Validar que erro é lançado quando email ou senha não são informados', function () {
        // Act & Assert
        assert.throws(
            function () { fazerLogin('', '') },
            {
                message: 'O email e a senha precisam ser informados.'
            }
        );
    });
});
