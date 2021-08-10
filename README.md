# Desafio Driva

> Desafio para vaga de estágio na Driva Tecnologia

<a href="https://github.com/Jackzinho" target="_blank">![Author](https://img.shields.io/badge/author-Jacks-982da6?style=flat-square)</a>
![Languages](https://img.shields.io/github/languages/count/Jackzinho/desafio-driva?color=982da6&style=flat-square)

----------

## Ferramentas:
### <a href="https://www.typescriptlang.org" target="_blank">Typescript</a>:
**Utilizado para melhores práticas de tipagem de código e prevenção de bugs por conta da natureza selvagem do Javascript**

### <a href="https://eslint.org" target="_blank">ESLint</a>:
**Utilizado para padronizar a estilização do código**

### <a href="https://prettier.io" target="_blank">Prettier</a>:
**Utilizado para adicionar mais funcionalidade ao ESLint**

### <a href="https://github.com/wclr/ts-node-dev" target="_blank">ts-node-dev</a>:
**Utilizado para dar restart no servidor quando arquivos forem modificados**

### <a href="https://github.com/dividab/tsconfig-paths" target="_blank">tsconfig-paths</a>:
**Configura path mapping no typescript**

### <a href="https://expressjs.com" target="_blank">Express</a>:
**Framework para rodar um server HTTP no Nodejs**

### <a href="https://github.com/node-fetch/node-fetch" target="_blank">node-fetch</a>:
**Biblioteca para fazer requisições HTTP assíncronas**

### <a href="https://github.com/expressjs/cors" target="_blank">cors</a>:
**Middleware para configurar headers CORS no Express**

### <a href="https://github.com/ilearnio/module-alias" target="_blank">module-alias</a>:
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
**Para rodar o projeto é necessário ter o <a href="https://nodejs.org/en/" target="_blank">Node.js versão LTS</a> instalado na máquina.**<br> 
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
**Os comandos a seguir podem ser executados usando <a href="https://yarnpkg.com" target="_blank">Yarn</a> ou <a href="https://www.npmjs.com" target="_blank">npm</a>.**<br>
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

  ```json
  200 Ok - text/plain
  "World"
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
