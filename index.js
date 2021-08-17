const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// IMPORT ROUTES
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config();

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('Connected to db...');
});

// MIDDLEWARE
app.use(express.json())

// ROUTE MIDDLEWARES
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

const PORT = 3000;

app.listen(PORT, () => console.log('Server listening...'));