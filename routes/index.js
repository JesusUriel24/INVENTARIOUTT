const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController');
const usuariosController = require('../controller/usuariosController');
const homeEndController = require('../controller/homeEndController');
const formularioController = require('../controller/formularioController');
const carrerasController = require('../controller/carrerasController');
const materiasController = require('../controller/materiasController');
const especialidadesController = require('../controller/especialidadesController');



module.exports = function(){
    router.get('/', homeController.home);

    router.get('/crear_cuenta', usuariosController.formCrearCuenta);
    router.post('/crear_cuenta', usuariosController.crearNuevaCuenta);

 //Iniciar Sesion
    router.get('/IniciarSesion', usuariosController.formIniciarSesion);
    router.post('/IniciarSesion', usuariosController.iniciarSesion);

    // Pagina principal
    router.get('/principal',usuariosController.formPrincipal);

     // Instrucciones
     router.get('/instrucciones', 
     usuariosController.usuarioAntenticado,
     usuariosController.formInstrucciones);

     // Define una ruta para manejar la solicitud POST en '/formulario'
         //router.post('/formulario', formularioController.procesarFormulario);
         router.get('/formulario', 
         usuariosController.usuarioAntenticado,
         formularioController.formFormulario);
         router.post('/formulario', 
         formularioController.guardarformulario,
         formularioController.procesarformulario);
  
    router.get('/homeEnd', homeEndController.homeEnd);

    //registro de carreras
    router.get('/carrera', carrerasController.visualizarCarreras);
    router.post('/carrera', carrerasController.guardarCarreras);

    
    router.get('/materias', materiasController.visualizarMaterias);
    router.post('/materias', materiasController.guardarMaterias);

    
        router.get('/especialidades', especialidadesController.visualizarEspecialidades);
    router.post('/especialidades', especialidadesController.guardarEspecialidades);
    
    return router;
}