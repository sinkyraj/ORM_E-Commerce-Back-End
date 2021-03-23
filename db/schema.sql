-- DROP DATABASE
--DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
--CREATE DATABASE ecommerce_db;

const { Sequelize } = require('sequelize')

module.exports = new Sequelize('mysql://root:rootroot@localhost/ecommerce_db')

