const Sequelize = require('sequelize');
const db = require('../config/db');

const Especialidades = db.define('especialidades',{
    
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    especialidad: Sequelize.STRING(100),
    nomenclatura: Sequelize.STRING(12)
});

module.exports = Especialidades;