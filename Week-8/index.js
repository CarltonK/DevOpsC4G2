const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ running: true });
});

app.get('/user', (req, res) => {
    return res.status(200).json({ users: [] });
});

let server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server;