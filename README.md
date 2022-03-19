# API Bookstore

### Descrição
 - Projeto de fim do módulo 4 da formação em Desenvolvimento Web Full Stack @ Resilia. 
 - O projeto consiste na criação de uma API REST para interagir com informações do banco de dados de uma livraria. 
 - As condições principais para a entrega do projeto foram: o uso do padrão REST, com os verbos referentes ao protocolo HTTP; e o uso do padrão DAO ou de ORM para interagir com o banco de dados. Optamos por utilizar o ORM Sequelize e o banco de dados SQLite.

### Como utilizar
- Você precisa ter instalada em sua máquina a versão 16.14.0 do NodeJS;
- Faça clone do seguinte repositório:
 
    - `gh repo clone carollyb/api-bookstore` caso use CLI
    - ou `git clone https://github.com/carollyb/api-bookstore.git`
  
-  Instale as dependências
   -  `npm install`
  
- Inicie o projeto
  - `npm run dev`
### Criando uma conexão no Beekeeper

  Caso queira observar as alterações no banco de dados, a aplicação Beekeeper é uma opção.
  - Disponível para download em: `https://www.beekeeperstudio.io/`
  
  Após a instalação:
- Select a connection type: sqlite
- database file: Procurar a pasta do projeto e seleciona o arquivo dev.sqlite
- Nomear e salvar
- Rodar o servidor com npm run dev e recarregar no Beekeeper: a(s) entidade(s) deve(m) aparecer lá

### Estrutura da API

- POST: 
  - /books (passando o objeto no corpo da requisição. O id não é necessário pois é gerado automaticamente através da biblioteca uuid)
  
- GET: 
  - /books
  - /books/<título>

- PUT:
  - /books/<id> (passando o objeto com todos os atributos no corpo da requisição, com exceção do id, que não deve ser alterado manualmente)

- PATCH: 
  - /books/<id> (passando o atributo no corpo da requisição, com exceção do id, que não deve ser alterado manualmente)

- DELETE:
  - /books/<id>
### Tecnologias utilizadas

- NodeJS
- Express
- Sequelize ORM
- JavaScript
- Insomnia
- Beekeeper

- Bibliotecas: Joi, Supertest, uuid