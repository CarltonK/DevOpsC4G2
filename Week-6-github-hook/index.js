// Imports
const express = require('express');

const PORT = process.env.PORT || 3000;

// Create an express app
const app = express();
app.use(express.json());

// Routes
app.post('/', (req, res) => {
    const body = req.body;
    console.log(body)
    res.status(200).json({ message: 'success' });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});