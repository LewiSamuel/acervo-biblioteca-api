const Sequelize = require("sequelize");
require('dotenv/config');

// Conexao com o BD
const sequelize = new Sequelize(process.env.JAWSDB_URL);

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}