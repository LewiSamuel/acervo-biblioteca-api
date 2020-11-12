const db = require("../lib/con");

const Obra = db.sequelize.define('Obra',{
    Titulo: {
        type: db.Sequelize.STRING(400),
        allowNull: false
    },
    Descricao: {
        type: db.Sequelize.TEXT,
    },
    Biblioteca: { 
        type: db.Sequelize.TEXT
    }
});

Obra.sync();

module.exports = Obra;