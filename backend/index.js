const express = require('express');
const axios = require('axios').default;
const getXYZ = require('./getXYZ.js');
const getBC = require('./getBC.js');

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({ 'massages': 'already' });
});

app.post('/api/doscg/getXYZ', (req, res) => {
    const body = req.body;
    res.status(200).json(getXYZ(body));
})

app.post('/api/doscg/getBC', (req, res) => {
    const body = req.body;
    res.status(200).json(getBC(body));
})

app.post('/api/doscg/getRoute', (req, res) => {
    const body = req.body;
    const url = google_enpoint + '/maps/api/directions/json?origin=' + body.origin + '&destination=' + body.destination + '&mode=DRIVING&key=' + google_key;
    axios.get(url).then((response) => {
        let mgs = JSON.parse(response.data);
        res.status(200).json(mgs);
    }).catch((error) => {
        console.log(error)
        res.status(500);
    })
})

const port = process.env.PORT || 3000
const google_key = process.env.GGKEY || '$YOURKEY'
const google_enpoint = process.env.GGENPONT || 'http://localhost:8001'
app.listen(port, () => console.log(`Listening on port${port}...`));