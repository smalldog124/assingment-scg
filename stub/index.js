const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ 'massages': 'already' });
});

app.get('/maps/api/directions/json', (req, res) => {
    var response
    fs.readFile('googlemap.json', 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        res.status(200).json(data);
    });
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port${port}...`));