const { body, validationResult } = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuarios = require('../models/Usuarios');
const Carrera = require ("../models/carrera");

exports.formCrearCuenta = async (req,res) => {
    const carrera = await Carrera.findAll();
    

    res.render('CrearCuenta', {
        nombrePagina : 'Crear cuenta',
        carrera

    });
};

exports.crearNuevaCuenta = async (req, res) => {
    const usuario = req.body;

    //establecer activo en true
    usuario.activo = 1;


  // Validar confirmación de contraseña
  body('confirmar', 'El password confirmado no puede ir vacío').notEmpty();
  body('confirmar', 'El password es diferente').equals(req.body.password);

    // Verificar si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si hay errores, enviar un mensaje de error al cliente
        req.flash('error', errors.array().map(err => err.msg));
        res.redirect('/crear_cuenta');
        return;
    }

    try {
         await Usuarios.create(usuario);
        
        req.flash('exito', 'La cuenta se ha creado correctamente, Bienvenido a la Evaluacion Docente');
        res.redirect('/instrucciones');
        
        //TODO : Flash Message y redireccionar
    } catch (error) {
        let erroresSequelize = [error.message];
        if (error.errors && Array.isArray(error.errors)) {
            erroresSequelize = error.errors.map(err => err.message);
        }
        //const erroresSequelize = error.errors.map(err => err.message);
        //console.log(erroresSequelize);
        req.flash('error', erroresSequelize);
        res.redirect('/crear_cuenta');
    }
}

// para que el usuario se active y pueda iniciar sesion

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async function(email, password, done) {
        try {
            const usuario = await Usuarios.findOne({ where: { email } });

            if (!usuario || !usuario.validarPassword(password)) {
                return done(null, false, { message: 'Este usuario no existe' });
            }

            return done(null, usuario);
        } catch (error) {
            return done(error);
        }
    }
));

passport.serializeUser(function(usuario, done) {
    done(null, usuario.id);
});

passport.deserializeUser(async function(id, done) {
    try {
        const usuario = await Usuarios.findByPk(id);
        done(null, usuario);
    } catch (error) {
        done(error);
    }
});

exports.iniciarSesion = passport.authenticate('local', {
    successRedirect: '/instrucciones',
    failureRedirect: '/IniciarSesion',
    failureFlash: true,
    badRequestMessage: 'Ambos campos son obligatorios'
})

exports.usuarioAntenticado = (req, res, next) =>{
    //si el usuario esta autenticado, adelante
    if(req.isAuthenticated() ) {
        return next();
    }

    // sino esta autenticado
    return res.redirect('/IniciarSesion');
}











//formulario iniciar sesion 
exports.formIniciarSesion = (req,res) => {
    res.render('IniciarSesion', {
        nombrePagina : 'Alumno-Docente'
    })
}



//dentro de la evaluacion docente
exports.formInstrucciones = (req,res) => {
    res.render('instrucciones', {
        nombrePagina : 'Alumno-Docente'
    })
}



exports.formPrincipal = (req,res) => {
    res.render('principal', {
        nombrePagina : 'Alumno-Docente'
    })
}


