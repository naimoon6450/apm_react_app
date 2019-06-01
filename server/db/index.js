const db = require('./db_init');
const User = require('./User');
const Product = require('./Product');

Product.belongsTo(User, {as: 'manager'}); // creates a managerid on Product (Source) , User is Target, magic methods are on source

module.exports = {
    db,
    User,
    Product
}