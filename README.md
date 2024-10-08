# Projeto Para Disciplina Web


## Back

Para executar o projeto back em Node.js se faz necessario os segintes comandos iniciais

- npm install: para instalar os pacotes
- npm run dev: para executar o projeto node com o nodemon

Para executar as migrations para o postgreSQL que é o banco de dados utilizado

1. Modificar as configurações do banco de dados na pasta BackEnd/src/DataBase/config e criar o mesmo na maquina local vazio

2. Depois entra na pasta BackEnd/src/DataBase e executar o comando: npx sequelize-cli db:migrate

## Front