const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB)
    .then(() => console.log('Connected to the DB'))
    .catch(() => console.log('Error in DB connection'))

//mongodb://127.0.0.1:27017