const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const Sequelize = require('sequelize');

const app = express();

app.use(cors())
app.use(bodyParser.json());

const db = new Sequelize('Drug_Data', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql' 
});

// checking the connection
db.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

// starting the server
app.listen(3000, ()=> {
    console.log('app is running on port 3000');
  })