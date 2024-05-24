const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const router = require('./routes');



//Configuracion y modelos de la base de datos
const db = require('./config/db');
   require('./models/Usuarios');
   require('./models/carrera');
   require('./models/Cuestionario');
   require('./models/materia');
   require('./models/especialidades');
   db.sync().then(() => console.log('DB Conectada')).catch((error) => console.log(error));

//Variables de Desarrollo
require('dotenv').config({path: 'variables.env'});


//Aplicacion principal
const app = express();

//Body parser, leer formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Habilitar EJS como template engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Ubicacion vistas
app.set('views', path.join(__dirname, './views'));

//archivos staticos
app.use(express.static('public'));

//habilitar cookieParser
app.use(cookieParser());


// crear la session
app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false
}))

// Middleware de inicialización de Passport.js
app.use(passport.initialize());
app.use(passport.session());

//Agrega flash messages
app.use(flash());

//middleware (usuario logueado, flash messages, fecha actual)
app.use((req, res, next) =>{
    res.locals.mensajes = req.flash();
    const fecha = new Date();
    res.locals.year = fecha.getFullYear();
    next();
});

//Routing
app.use('/', router());


//Agrega el puerto
app.listen(process.env.PORT, () => {
    console.log('El servidor esta funcionando')
});

