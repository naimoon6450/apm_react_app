const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const db = require('./db/db_init')

//router
const apiRouter = require('./apiRouter')

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'));
// static files
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/api', apiRouter);


// start server and listen
const PORT = 3000;

db.sync()
.then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log('Server listening ...');
    })
})
