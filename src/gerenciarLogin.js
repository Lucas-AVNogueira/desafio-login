// 1) Um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false).
const usuarios = [
    {
        id: 1,
        nome: 'Alice Silva',
        email: 'alice@teste.com',
        senha: '123',
        expirado: false
    },
    {
        id: 2,
        nome: 'Davi Nogueira',
        email: 'davi@teste.com',
        senha: '456',
        expirado: true
    },
    {
        id: 3,
        nome: 'Mayara Nogueira',
        email: 'may@teste.com',
        senha: '789',
        expirado: false
    },
    {
        id: 4,
        nome: 'Lucas Nogueira',
        email: 'l@teste.com',
        senha: 'abc',
        expirado: false
    }
];

// 2) Função de login com tratamento de erros (throw)
export function fazerLogin(email, senha) {
    // Validação de preenchimento obrigatório
    if (!email || !senha) {
        throw new Error('O email e a senha precisam ser informados.');
    }

    let usuarioEncontrado = '';

    // Busca o usuário pelo email
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            usuarioEncontrado = usuarios[i];
            break;
        }
    }

    // Validação 1: Usuário não encontrado
    if (!usuarioEncontrado) {
        return 'Usuário não encontrado';
    }

    // Validação 2: Senha incorreta
    if (usuarioEncontrado.senha !== senha) {
        return 'Senha incorreta';
    }

    // Validação 3: Credenciais expiradas
    if (usuarioEncontrado.expirado) {
        return 'Renove suas credenciais';
    }

    // Sucesso
    return 'Login realizado com sucesso';
}
