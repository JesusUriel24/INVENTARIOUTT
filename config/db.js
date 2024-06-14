const Sequelize = require('sequelize');

module.exports = new Sequelize('Laboratorios2','postgres','123456789',{
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
    pool:{
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

});