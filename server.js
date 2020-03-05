const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const adidas = require('./routes/api/adidas');
const trending = require('./routes/api/trending');

const PORT = process.env.port || 5000;
const server = express();
server.use(express.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

server.use('/api/adidas', adidas)
server.use('/api/trending', trending)

server.listen(PORT, () => console.log(`Listening in port: ${PORT}`))
