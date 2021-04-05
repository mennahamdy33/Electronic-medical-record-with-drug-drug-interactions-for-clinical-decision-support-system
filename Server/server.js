const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
// const Sequelize = require('sequelize');
const knex = require('knex')
const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const db = knex({
    // Enter your own database information here based on what you created
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'mysql',
      database : 'DruGuide'
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
    address, email, password,proficiency, auth_id , pickedClinics} = req.body;

  const hash = bcrypt.hashSync(password, 10);
  let doc_id = ''
  // const isValid = bcrypt.compareSync(password, hash);

  if(proficiency === 'doctor'){

 

    db.transaction(async trx => {

      await trx.insert({
        first_name: first_name, last_name: last_name,
        gender: gender, ssn: national_id,
        phone_number:phone_number, birth_date: birth_date,
        education: education, specialty:speciality,
        address:address, email: email,
        password: hash , auth_id: auth_id} )

      .into('doctors')
      .then(doctor_id => {
        
        doc_id = doctor_id;
        if(pickedClinics.length){
          pickedClinics.forEach(clinc => {

            
              return trx('doctor_works_in')
              // .returning('*')
              .insert({
                doctor_id: doctor_id[0],
                clinic_id: clinc.clinic_id,
                
              }).then(()=>{
                  //empty
                }).catch(err => console.log(err))
          });
         
        }

      })
      // .then(trx.commit)
      // .catch(trx.rollback)
    })
    .then(()=>{
      // console.log(doc_id)
      res.json(doc_id[0]);

    }).catch(err => console.log(err))
    .catch(err => console.log(err))
    // .catch(err => res.status(400).json('unable to register'))


    // db.insert({
    //   first_name: first_name, last_name: last_name,
    //   gender: gender, ssn: national_id,
    //   phone_number:phone_number, birth_date: birth_date,
    //   education: education, specialty:speciality,
    //   address:address, email: email,
    //   password: hash})
    // .into('doctors')
    // .catch(err => res.status(400).send('unable to register'))

  }else if(proficiency === 'secretary'){
    db.insert({
      first_name: first_name, last_name: last_name,
      gender: gender, ssn: national_id,
      phone_number:phone_number, birth_date: birth_date,
      education: education,
      address:address, email: email,
      password: hash})
    .into('secretary')
    .catch(err => res.status(400).send('unable to register'))
  }
  // res.status(200).json('Register done')
  // .catch(err => {res.status(400).json('unable to register')})
})

app.get('/clinics/:id', (req, res) => {

  const  id  = req.params.id;
  
  // db.select('*').from('clinics')
  db.select('*').from('clinics').where('customer_id', id)
    .then(clinics => {
      if (clinics.length) {
        res.json(clinics)
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => console.log(err))
    // .catch(err => res.status(400).json('error getting clinics'))
})

app.post('/isAuthorized', (req, res) => {
  const {uuid} = req.body;
  db.select('*').from('authorized_users').where('uuid', uuid)
    .then(user => {
      if (user.length) {
        console.log("yes user")
        res.json(user)
      } else {
        console.log("no user")
        res.status(400).json('no user')
      }
    })
    .catch(err => res.status(400))
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



