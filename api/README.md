
## Descrição

Api desenvolvida para o desafio da Take Blip.

Esta api tem como objetivo realizar uma requisição na API do GitHub para buscar os 5 repositórios mais antigos da Take Blip que utilizam a linguagem C#.

Ela também realiza a formatação da resposta padrão do GitHub para a resposta padrão utilizada nos sistemas da Take Blip.

Todo o desenvolvimento foi realizado utilizando o framework [Nest.JS](https://github.com/nestjs/nest)

## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes

A aplicação está com 100% de cobertura de testes. Os comandos para executar os testes estão a baixo.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentação

Depois de executar o comando para instalação e o comando para rodar a aplicação, sua documentação pode ser encontrada acessando o endpoint https://localhost:3000

A documentação também pode ser acessada utilizando o seguinte link: https://thadeu-takeblip.herokuapp.com