const Sequelize = require('sequelize');
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const Usuarios = require('./Usuarios');

const Cuestionario = db.define('cuestionario', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4()

    },

    especialidad: Sequelize.STRING(100),    
    
    carrera: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    docente: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    materia: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    pregunta1: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta2: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta3: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta4: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta5: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta6: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta7: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta8: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta9: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta10: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta11: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta12: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta13: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta14: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta15: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta16: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta17: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta18: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    pregunta19: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 4
        }

    },

    comentario: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El campo no puede ir vacio'
            }

        }
    }
})

Cuestionario.belongsTo(Usuarios);

module.exports = Cuestionario;