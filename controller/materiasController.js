const Materia = require ("../models/materia");

exports.visualizarMaterias = (req, res) => {
    res.render('materias', {
        nombrePagina : 'Registro de Materias'
    })
};

exports.guardarMaterias = async (req, res) => {
    const datosMaterias = req.body;
    
    try{
        //alamacena los datos basicos de las especialidades de la universidad
        await Materia.create(datosMaterias);
        req.flash('exito','Los datos fueron enviado correctamente');
        res.redirect('/materias');
    } catch (error) {
        console.log(error);
        req.flash('error', 'Ocurrió un error al guardar los datos. Por favor, inténtalo de nuevo');
        res.redirect('/materias');
    }
}