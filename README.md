# Projeto Para Disciplina Web


## Back

Para executar o projeto back em Node.js se faz necessario os segintes comandos iniciais

- npm install: para instalar os pacotes
- npm run dev: para executar o projeto node com o nodemon

Para executar as migrations para o postgreSQL que é o banco de dados utilizado

1. Modificar as configurações do banco de dados na pasta BackEnd/src/DataBase/config e criar o mesmo na maquina local vazio

2. Depois entra na pasta BackEnd/src/DataBase e executar o comando: npx sequelize-cli db:migrate

## API

portas: 'http://localhost:3000' or 'http://localhost:3001'

**End-Point Student.**

Metodo: POST   ->  http://localhost:3000/student

```json
body
{
   "id":0,
   "name": "admin",
   "email": "admin@gmail.com",
   "skills": [
     {
        "name": "java",
        "description": "string"
     }
   ]
}
```

Metodo: PUT    ->  http://localhost:3000/student

```json
body
{
   "id":0,
   "name": "admin",
   "email": "admin@gmail.com",
   "skills": [
     {
        "id": 0,
        "name": "java",
        "description": "string"
     }
   ]
}
```

Metodo: DELETE ->  http://localhost:3000/student?{id}

Metodo: GET    ->  http://localhost:3000/student


**End-Point Teacher.**


Metodo: POST   ->  http://localhost:3000/teacher

```json
body
{
    "name": "Jose",
    "email": "Jose@gmail.com",
    "Projects": [
      {
        "name": "java",
				"description": "java"
      }
    ]
  }
```

Metodo: PUT    ->  http://localhost:3000/teacher

```json
body
{
   "id": 0,
   "name": "Jose Editado",
   "email": "Jose@gmail.com",
   "Projects": [
      {
         "name": "java",
         "description": "java"
      }
    ]
  }
```

Metodo: DELETE ->  http://localhost:3000/teacher?{id}

Metodo: GET    ->  http://localhost:3000/teacher

**End-Point Skill.**

Metodo: GET    ->  http://localhost:3000/skill

**End-Point Project.**

Metodo: GET    ->  http://localhost:3000/project

<!-- **End-Point Student/Teacher.**

Metodo: POST   ->  http://localhost:3000/relationship

```json
body
{
   "studentId":0,
   "teacherId":0
}
```

Metodo: DELETE ->  http://localhost:3000/relationship?{id}

Metodo: GET    ->  http://localhost:3000/relationship -->

## Front