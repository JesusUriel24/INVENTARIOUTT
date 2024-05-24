const Especialidades = require ("../models/especialidades");

exports.visualizarEspecialidades = (req, res) => {
    res.render('especialidades', {
        nombrePagina : 'Especialidades UTT'
    })
};

exports.guardarEspecialidades = async (req, res) => {
    const datosEspecialidades = req.body;
    
    try{
        //alamacena los datos basicos de las especialidades de la universidad
        await Especialidades.create(datosEspecialidades);
        req.flash('exito','Los datos fueron enviado correctamente');
        res.redirect('/');
    } catch (error) {
        console.log(error);
        req.flash('error', 'Ocurrió un error al guardar los datos. Por favor, inténtalo de nuevo');
        res.redirect('/especialidades');
    }
}