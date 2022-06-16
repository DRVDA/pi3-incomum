var Sequelize = require('sequelize');
var sequelize = require('./database');
// importa o modelo – chave forasteira generoID
var Genero = require('./genero');

var Filme = sequelize.define('filmes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: Sequelize.STRING,
    titulo: Sequelize.STRING,
    foto: Sequelize.STRING,
    generoId: {
        type: Sequelize.INTEGER,
        // referência a outro model
        references: {
            model: Genero,
            key: 'id'
        }
    }
},
    {
        timestamps: false,
    });

Filme.belongsTo(Genero);
Genero.hasMany(Filme);

module.exports = Filme