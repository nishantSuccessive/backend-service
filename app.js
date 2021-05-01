const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const router = require('./User/UserManagement/route');

// db connection 

const connectionString = 'MONGO_URL=mongodb://localhost:27017/user-management-service';

const apiPrefix = '/api';

mongoose.connect(connectionString, { autoIndex: true, // build indexes
    bufferMaxEntries: 0,
    keepAlive: 1,
    poolSize: 10, // Maintain up to 10 socket connections
    useNewUrlParser: true,
    useUnifiedTopology: true }, () => console.log('Connection created'))

const app = express();

const PORT = process.env.PORT || 6001;

app.use(bodyParser.json())

app.use('/health-check', (req, res) => res.send("Health check route"))

app.use(apiPrefix, router);

app.get(apiPrefix, (req, res) => res.send('Welcome to the App!!'))

app.listen(PORT, () => console.log(`App is running on port ${PORT}`)) 