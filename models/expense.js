const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  price: Sequelize.INTEGER,
  
  product: Sequelize.STRING,

  selecting:Sequelize.STRING
  
});

module.exports = Expense;