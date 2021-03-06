const { db, User, Product } = require('./server/db/index');

const seed = () => {
    // sync db / mayb drop tables
    // then create some users and products
    db.sync({force: true})
    .then(() => {
        console.log('successfully synced');
        // now seed
        const arrUsersProds = [
            User.create({name: 'Naimun Siraj'}),
            User.create({name: 'Noden Jascript'}),
            User.create({name: 'Reactor Redx'}),
            Product.create({name: 'Sirajerizer'}),
            Product.create({name: 'Node JS'}),
            Product.create({name: 'React'}),
        ]
        return Promise.all(arrUsersProds)
    })
    .then(() => {
        console.log('Database seeded ...');
    })
    .catch(e => console.error(e))
}

seed()