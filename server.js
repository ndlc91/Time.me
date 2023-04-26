const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

//require env variables
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const clientsRouter = require('./routes/clients');
const clientRouter = require('./routes/client');

app.use('/clients', clientsRouter);
app.use('/client', clientRouter);

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '/client/build/index.html'));
    })
}

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`server started on port ${port}`));

