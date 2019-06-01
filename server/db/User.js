const Sequelize = require('sequelize');
const db = require('./db_init');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
    }
})

module.exports = User;