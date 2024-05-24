const Carrera = require ("../models/carrera");

exports.visualizarCarreras = (req, res) => {
    res.render('carrera', {
        nombrePagina : 'Registro de las Carreras'
    })
};

exports.guardarCarreras = async (req, res) => {
    const datosCarrera = req.body;
    
    try{
        //alamacena los datos basicos de las especialidades de la universidad
        await Carrera.create(datosCarrera);
        req.flash('exito','Los datos fueron enviado correctamente');
        res.redirect('/');
    } catch (error) {
        console.log(error);
        req.flash('error', 'Ocurrió un error al guardar los datos. Por favor, inténtalo de nuevo');
        res.redirect('/carrera');
    }
}