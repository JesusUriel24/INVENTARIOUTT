const Sequelize = require('sequelize');
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const Carrera = require('./carrera');


const Materia = db.define('materia',{
    
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    materia: Sequelize.STRING(100)
});

Materia.belongsTo(Carrera);

module.exports = Materia;