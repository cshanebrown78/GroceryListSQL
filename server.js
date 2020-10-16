const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const path = require('path');
// const config = require('config');

// const items = require('./routes/api/items')

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Config
// const db = config.get('mongoURI')

// Connect to the Mongo
// mongoose.connect(process.env.MONGODB_URI || db)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GroceryList")
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/repeats', require('./routes/api/repeats'));

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        // res.sendFile(path.resolve(__dirname,'./client/build/index.html'));
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

app.listen(port, () => console.log(`Server started on port ${port}`));