const express = require('express');
const axios = require('axios');

const server = express();

const trending = server.get('/', (req, res) => {
    axios.get('https://www.res-x.com/ws/r2/resonance.aspx?appid=adidas01&lang=en&cv31=PRODUCTION&event=product&no=16&output=json&scheme=home_rr&sessionid=333972165692952&trackingid=525094203254444')
    .then(resp => res.json(resp.data.resonance.schemes[0]))
    .catch(err => console.log(err.data))
})

module.exports = trending;