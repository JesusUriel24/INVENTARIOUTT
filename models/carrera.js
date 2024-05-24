const Sequelize = require('sequelize');
const db = require('../config/db');

const Carrera = db.define('carrera',{
    
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    docente: Sequelize.STRING(100),
    
    especialidad: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    
    nombre: Sequelize.STRING(100),
    nomenclatura: Sequelize.STRING(12)
});

module.exports = Carrera;