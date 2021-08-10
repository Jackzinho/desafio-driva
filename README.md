# Desafio Driva

> Desafio para vaga de estágio na Driva Tecnologia

[![Author](https://img.shields.io/badge/author-Jacks-982da6?style=flat-square)](https://github.com/Jackzinho)
![Languages](https://img.shields.io/github/languages/count/Jackzinho/desafio-driva?color=982da6&style=flat-square)

----------

## Ferramentas:
### [Typescript](https://www.typescriptlang.org):
**Utilizado para melhores práticas de tipagem de código e prevenção de bugs por conta da natureza selvagem do Javascript**

### [ESLint](https://eslint.org):
**Utilizado para padronizar a estilização do código**

### [Prettier](https://prettier.io):
**Utilizado para adicionar mais funcionalidade ao ESLint**

### [ts-node-dev](https://github.com/wclr/ts-node-dev):
**Utilizado para dar restart no servidor quando arquivos forem modificados**

### [tsconfig-paths](https://github.com/dividab/tsconfig-paths):
**Configura path mapping no typescript**

### [Express](https://expressjs.com):
**Framework para rodar um server HTTP no Nodejs**

### [node-fetch](https://github.com/node-fetch/node-fetch):
**Biblioteca para fazer requisições HTTP assíncronas**

### [cors](https://github.com/expressjs/cors):
**Middleware para configurar headers CORS no Express**

### [module-alias](https://github.com/ilearnio/module-alias):
**Configura path mapping no node**

## Organização do código:
O código fonte fica dentro da pasta *"src"*, os outros arquivos são para configuração.<br>

Primeiro, o arquivo principal: ***aqui fica o código que roda o servidor do Express e configura as rotas.***
```
src/server.ts
```

Esse arquivo contém apenas algum setup para o Express:
```
src/server-config.ts
```

Esse diretório contém os erros customizados que serão utilizados dentro da aplicação:
```
src/errors
```

Aqui ficam os controladores com os requisitos do desafio:
```
src/controllers
```

Adicionalmente, os controladores utilizam algumas interfaces para desacoplar um pouco o código:
```
src/controllers/interfaces
```

Os adaptadores de interfaces da aplicação ficam aqui:
```
src/adapters
```

Funções helper de qualquer natureza também têm seu próprio diretório:
```
src/helpers
```

O código de infraestrutura também está separado:
```
src/infra
```

E por último, os modelos de dados:
```
src/models
```

## Instalação:
**Para rodar o projeto é necessário ter o [Node.js versão LTS](https://nodejs.org/en/) instalado na máquina.**<br> 
Para clonar via SSH é só usar o comando:

```
git clone git@github.com:Jackzinho/desafio-driva.git
```

ou via HTTPS:

```
git clone https://github.com/Jackzinho/desafio-driva.git
```

Após clonar o repositório, é preciso instalar as dependências:

```
npm install
```

## Iniciando:
**Os comandos a seguir podem ser executados usando [Yarn](https://yarnpkg.com) ou [npm](https://www.npmjs.com).**<br>
Comando principal para iniciar o servidor:

```
npm start
```

Comando para iniciar o servidor em modo de desenvolvimento:

```
npm run dev
```

Comando para fazer a build do projeto:

```
npm run build
```

Comando para utilizar ESLint no projeto e consertar erros de estilo:

```
npm run lint
```

## Rotas:
### **Hello World**

*Uma rota que retorna uma resposta amigável :)*

- **URL**

  */hello*

- **Method:**
  
  `GET`

- **Success Response:**

  ```
  200 Ok - text/plain - "World"
  ```

- **Sample Call:**

  ```curl
  curl http://localhost:3333/hello
  ```

----------
  
### **Soma**

*Uma rota que retorna o montante da soma de um vetor de números*

- **URL**

  */soma*

- **Method:**
  
  `POST`

- **Body**

  ```json
  {
    "numbers": [2, 2]
  }
  ```

- **Success Response:**

  ```json
  200 Ok - application/json
  {
    "result": 4
  }
  ```

- **Sample Call:**

  ```curl
  curl -X POST http://localhost:3333/soma
   -H 'Content-Type: application/json'
   -d '{ "numbers": [2, 5, 9] }'
  ```

----------

### **Star Wars**

*Uma rota que retorna o nome dos filmes de Star Wars*

- **URL**

  */starwars/films*

- **Method:**
  
  `GET`

- **Success Response:**

  ```json
  200 Ok - application/json
  [
    {
        "title": "Star Wars: The Phantom Menace",
        "episodeNumber": 1
    },
  ]
  ```

- **Sample Call:**

  ```curl
  curl http://localhost:3333/starwars/films
  ```
