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

// this will make the associations so we can initiate the state as such
apiRouter.put('/products/:id', (req, res) => {
    // make the manager associated to this id?
    const prodId = parseInt(req.params.id, 10);
    // maybe there will be a body item that will contain the relevant manager that was inserted in the form
    // const manager = req.body with some data about the manager
    
    // supposed to be updating something here probably product so it has the appropriate manager
    
})

module.exports = apiRouter;