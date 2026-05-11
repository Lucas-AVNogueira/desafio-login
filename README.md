# Desafio de Login

Projeto simples em JavaScript para validar cenários de autenticação com testes automatizados em Mocha e relatório em Mochawesome.

## Funcionalidades

A função de login cobre os seguintes cenários:

- Login com sucesso
- Usuário não encontrado
- Senha incorreta
- Credenciais expiradas
- Erro quando email ou senha não são informados

## Tecnologias

- Node.js
- JavaScript (ES Modules)
- Mocha
- Mochawesome

## Estrutura do projeto

```text
.
├─ src/
│  └─ gerenciarLogin.js
├─ test/
│  └─ gerenciarLogin.test.js
├─ mochawesome-report/
├─ package.json
└─ README.md
```

## Pré-requisitos

- Node.js 18+ (recomendado)
- npm

## Instalação

```bash
npm install
```

## Como executar os testes

Rodar a suíte de testes:

```bash
npm run test
```

Gerar relatório com Mochawesome:

```bash
npm run test:report
```

## Relatório de testes

Após executar o comando de relatório, os arquivos serão gerados em:

- mochawesome-report/mochawesome.json
- mochawesome-report/mochawesome.html

Para abrir o relatório no navegador, abra o arquivo HTML gerado.

## Exemplo de uso

```js
import { fazerLogin } from './src/gerenciarLogin.js';

const resultado = fazerLogin('alice@teste.com', '123');
console.log(resultado); // Login realizado com sucesso
```

## Observações

- Caso o comando mocha não funcione diretamente no terminal, use os scripts npm (npm run test) ou npx mocha.
- O projeto está configurado com "type": "module" no package.json.
