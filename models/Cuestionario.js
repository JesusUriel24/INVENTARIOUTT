const Sequelize = require('sequelize');
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');
const Usuarios = require('./Usuarios');

const Cuestionario = db.define('cuestionario', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4()

    },

    Inventario: Sequelize.STRING(100),    
    
    dispositivo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    sistemaOperativo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    marca: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    memoriaRam: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    tarjeta: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    procesador: {
        type: Sequelize.STRING(50),
        allowNull: false

    },


    dd: {
        type: DataTypes.ENUM('250GB', '500GB', '1TB'),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo Disco Duro no puede ser nulo'
            },
            isIn: {
                args: [['250GB', '500GB', '1TB']],
                msg: 'El campo Disco Duro debe ser "250GB", "500GB" o "1TB"'
            }
        }
    },

    funcional: {
        type: DataTypes.ENUM('si', 'no'),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo funcional no puede ser nulo'
            },
            isIn: {
                args: [['si', 'no']],
                msg: 'El campo funcional debe ser "si" o "no"'
            }
        }
    },

    descripcion: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El campo no puede ir vacio'
            }

        }
    },
    
    nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    especialidad: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
    
})

Cuestionario.belongsTo(Usuarios);

module.exports = Cuestionario;