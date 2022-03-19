const { Sequelize } = require('sequelize');

const tests = new Sequelize('bookstore', 'user', 'password', {
    dialect: 'sqlite',
    host: ':memory:'
});

module.exports = tests
