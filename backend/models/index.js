const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Word = require('./word')(sequelize, Sequelize);

module.exports = db;
