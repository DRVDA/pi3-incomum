var Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'AI2',
    'postgres',
    'hcZ858VJR',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    }
);
module.exports = sequelize;