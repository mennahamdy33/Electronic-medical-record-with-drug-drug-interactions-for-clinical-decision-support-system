const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
// const Sequelize = require('sequelize');
const knex = require('knex')

const db = knex({
    // Enter your own database information here based on what you created
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'mysql',
      database : 'Drug_Data'
    }
});


const app = express();

app.use(cors())
app.use(bodyParser.json());

// db.select('*').from('doctors').then(data => {
//     console.log(data[0].first_name);
// })

app.get('/', (req, res)=> {
  res.send(console.log('Hi'));
})

app.post('/register', (req, res) => {
  const {
    first_name,
    last_name,
    gender,
    national_id,
    phone_number,
    birth_date,
    education,
    speciality,
    address, email, password} = req.body;
    console.log(first_name,last_name)
  // const hash = bcrypt.hashSync(password);
  db.insert({
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    ssn: national_id,
    phone_number:phone_number,
    birth_date: birth_date,
    education: education,
    specialty:speciality,
    address:address,
    email: email,
    password: password}).into('doctors')
  .catch(err => console.log(err))
  res.status(200).json('Register done')
  // .catch(err => res.status(400).json('unable to register'))
})



// const db = new Sequelize('Drug_Data', 'root', 'mysql', {
//     host: 'localhost',
//     dialect: 'mysql' 
// });


// db.query("SELECT * FROM `doctors`").then(([results, metadata]) => {
//     // Results will be an empty array and metadata will contain the number of affected rows.
//     console.log(results[0].first_name);
//   })

// checking the connection
// db.authenticate()
// .then(() => {
//     console.log('Connection has been established successfully.');
// })
// .catch(err => {
//     console.error('Unable to connect to the database:', err);
// });

// starting the server
app.listen(3000, ()=> {
    console.log('app is running on port 3000');
  })