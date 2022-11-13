const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


// MongoDB connection
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });
})