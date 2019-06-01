const Sequelize = require('sequelize');
const db = require('./db_init');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
    }
})

module.exports = Product;