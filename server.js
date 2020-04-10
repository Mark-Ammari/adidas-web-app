const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const adidas = require('./routes/api/adidas');
const trending = require('./routes/api/trending');
const productlist = require('./routes/api/productlist');
const models = require('./routes/api/models');

const PORT = process.env.PORT || 5000;
const server = express();
server.use(express.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, HEAD, DELETE, PUT, OPTIONS")
    next();
});

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err))

server.use('/api/adidas', adidas);
server.use('/api/trending', trending);
server.use('/api/productlist', productlist);
server.use('/api/models', models);

server.use(cors());

if (process.env.NODE_ENV === 'production') {
    //set static folder
    server.use(express.static('adidas-app/build'));

    server.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, 'adidas-app', 'build', 'index.html'));
    })
}

server.listen(PORT, () => console.log(`Listening in port: ${PORT}`))
