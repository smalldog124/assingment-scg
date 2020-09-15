const express = require('express');

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

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`));