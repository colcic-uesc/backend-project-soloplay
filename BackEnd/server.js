const express =  require(`express`);
const studentRouter = require('./src/Routes/student.routes');
const teacherRouter = require('./src/Routes/teacher.routes');
const relationshipRouter = require('./src/Routes/relationship.routes');
const projectRouter = require('./src/Routes/project.routes');
const skillRouter = require('./src/Routes/skill.routes');

const app = express();
app.use( express.json() );

var corsOptions = {
    origin: ['http://localhost:3000','http://localhost:3001' ], // O domínio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Habilitar o envio de credenciais (por exemplo, cookies)
    optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use( skillRouter );
app.use( studentRouter );
app.use( projectRouter );
app.use( teacherRouter );
app.use( relationshipRouter );

app.listen(3001, () => console.log( "server is running!" ) );