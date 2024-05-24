const Cuestionario = require("../models/Cuestionario");
const Carrera = require ("../models/carrera");
const Especialidades = require ("../models/especialidades");


exports.formFormulario = async (req, res) => {
    const carrera = await Carrera.findAll();
    const especialidades = await Especialidades.findAll();
    
    // Mapear docentes por especialidad
    const docentesPorEspecialidad = {};
    carrera.forEach(carrera => {
        if (!docentesPorEspecialidad[carrera.especialidad]) {
            docentesPorEspecialidad[carrera.especialidad] = [];
        }
        docentesPorEspecialidad[carrera.especialidad].push(carrera.docente);
    });

    res.render('formulario', {
        nombrePagina: 'Alumno-Docente',
        carrera,
        especialidades,
        docentesPorEspecialidadJSON: JSON.stringify(docentesPorEspecialidad)  // Convertir a JSON
    });
};

exports.procesarformulario = (req, res) => {
    // Procesar los datos del formulario si es necesario

    // Redirigir al usuario a la página deseada
    res.redirect('/');
};

exports.guardarformulario = async (req, res) => {
    const  cuestionario = req.body;
    cuestionario.usuarioId = req.user.id;
    cuestionario.carrera = req.user.carrera;
    cuestionario.especialidad = req.body.especialidad; 

    try {
        //almacenar, guardar en la base de datos
        await Cuestionario.create(cuestionario);
        req.flash('exito','El cuestionario se ha envido correctamente, Gracias');
        res.redirect('/homeEnd');
    } catch (error) {
        console.log(error);
        req.flash('error', error);
        res.redirect('/formulario');
    }

    //console.log(cuestionario);
}

