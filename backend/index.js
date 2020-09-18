const express = require('express');
const axios = require('axios').default;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ 'massages': 'already' });
});

app.post('/api/doscg/getXYZ', (req, res) => {
    const body = req.body;
    res.status(200).json({x:1,y:3,z:33})
})

app.post('/api/doscg/getBC', (req, res) => {
    const body = req.body;
    res.status(200).json({b:2,c:-42})
})

app.post('/api/doscg/getRoute', (req, res) => {
    const body = req.body;
    const url = 'http://localhost:8080/maps/api/directions/json?origin='+body.origin+'&destination='+body.destination+'&mode=DRIVING&key='+google_key;
    axios.get(url).then((response)=>{
        let mgs = JSON.parse(response.data);
        res.status(200).json(mgs);
    }).catch((error)=>{
        console.log(error)
        res.status(500);
    })
})

const port = process.env.PORT || 3000
const google_key = process.env.GGKEY || 'YOURKEY'
app.listen(port, () => console.log(`Listening on port${port}...`));