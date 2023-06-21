const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log(`You have received a request from ${req.hostname}`);
    res.status(200).json({ hello: 'world' });
});

app.post('/', (req, res) => {
    console.log(`You have received a request with the following body ${JSON.stringify(req.body)}`);
    res.status(200).send(req.body);
});

app.listen(PORT, () => {
    const currentEnvironment = process.env.NODE_ENV
    console.log(`Server is listening on http://localhost:${PORT} in the ${currentEnvironment} environment`);
});