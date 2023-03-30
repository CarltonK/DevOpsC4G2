const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const blogRoutes = require('./routes/blog');

// Connect app to MongoDB
const connectionString = process.env.DATABASE_URL || '';
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

app.get('/', (req, res) => {
    console.log('New request');
    res.status(200).json({ status: true });
});

// Routes
app.use('/blog', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});