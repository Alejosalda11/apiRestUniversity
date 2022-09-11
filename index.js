const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const router = require('./routes/routes')

const { HOST, PORT, DB } = process.env ||'mongodb://localhost:27017/dbname';


try {
    mongoose.connect(DB, { useNewUrlParser: true });
    console.log('Data Base Connect');
} catch (error) {
    console.log(error);
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '600mb' }))
app.use(bodyParser.json({ limit: '600mb' }))


app.listen(PORT,()=>{
    console.log(`Server on Port http://localhost:${PORT}`);
})
// API ROUTES
app.use('/api/v1', router)





