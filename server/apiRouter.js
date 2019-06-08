const apiRouter = require('express').Router();
const { User, Product } = require('./db/index.js')

apiRouter.get('/users', (req, res) => {
    User.findAll()
    .then(users => {
        res.send(users);
    })
})

apiRouter.get('/products', (req, res) => {
    Product.findAll()
    .then(prods => {
        res.send(prods);
    })
})

apiRouter.get('/products/withusers', (req, res) => {
    Product.findAll({include: [{model: User, as: 'manager'}]})
    .then(prods => {
        res.send(prods);
    })
})

// this will make the associations so we can initiate the state as such
apiRouter.post('/products', (req, res) => {
    // make the manager associated to this id?
    // console.log(req.body);
    let manager = req.body.manager;
    const prodId = parseInt(req.body.prodId);

    Promise.all([Product.findByPk(prodId), User.findAll({where: {name: manager}})])
    .then(([product, user]) => {
        if (!user[0]) {
            product.update({managerId: null});
            res.send('Nullified manager')
        } else {
            product.setManager(user[0])
            res.send('Successfully added manager to db!')
        }
    })
    .catch(e => console.error(e))

})

module.exports = apiRouter;
