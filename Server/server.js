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




app.post('/register', async (req, res) => {
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

  const hash = await bcrypt.hashSync(password, 10);
  // const isValid = bcrypt.compareSync(password, hash);

  if(proficiency === 'doctor'){
    let work = []
    //Start transaction
    try {
      await db.transaction (async trx => {
        //Insert into login table
        const doctor_id = await trx('doctors')
        .insert({
          first_name: first_name, last_name: last_name,
          gender: gender, ssn: national_id,
          phone_number:phone_number, birth_date: birth_date,
          education: education, specialty:speciality,
          address:address, email: email,
          password: hash });
         
        if(pickedClinics.length){
  
          pickedClinics.forEach((clinc) =>{ 
            work.push({doctor_id: doctor_id[0], clinic_id: clinc.clinic_id})
          });
        }  

        const update_authrized = await trx('authorized_users').where({auth_id: auth_id}).update({doctor_id: doctor_id[0]}) ;
        const user = await trx('doctor_works_in')
          .insert(work);
        res.json(doctor_id[0]);
      })
    }
    catch (err){
      console.log(err);
      res.status(400).json('Unable to register');
    }

  }else if(proficiency === 'secretary'){
    let work = []
    //Start transaction
    try {
      await db.transaction (async trx => {
        const secretary_id = await trx('secretary')
        .insert({
          first_name: first_name, last_name: last_name,
          gender: gender, ssn: national_id,
          phone_number:phone_number, birth_date: birth_date,
          education: education,
          address:address, email: email,
          password: hash});
         
        if(pickedClinics.length){
  
          pickedClinics.forEach((clinc) =>{ 
            work.push({secretary_id: secretary_id[0], clinic_id: clinc.clinic_id})
          });
        }  

        const update_authrized = await trx('authorized_users').where({auth_id: auth_id}).update({secretary_id: secretary_id[0]}) ;

        const user = await trx('secretary_works_in')
          .insert(work);
          // .returning('*');      
        res.json(secretary_id[0]);
      })
    }
    catch (err){
      console.log(err);
      res.status(400).json('Unable to register');
    }

  }

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



app.post('/registerPurchase', async (req, res) => {

  const {
    first_name,
    last_name,
    gender,
    phone_number,
    password,email} = req.body;

  const hash = await bcrypt.hashSync(password, 10);

  db.insert({
    first_name: first_name, last_name: last_name,
    gender: gender, phone_number:phone_number, password: hash ,email: email
    })
  .into('purchasing_accounts')
  .then(()=>{
    res.status(200).json('Success')
  })
  .catch(err =>  res.status(400).json('unable to register'))
  
  // res.status(200).json('Success')

})


app.post('/signinPurchase', (req, res) => {
  db.select('email', 'password').from('purchasing_accounts')
    .where('email', '=', req.body.email)
    .then(async (data) => {
      const isValid = await bcrypt.compareSync(req.body.password, data[0].password);
      if (isValid) {
        return db.select( 'customer_id', 'first_name', 'last_name').from('purchasing_accounts')
          .where('email', '=', req.body.email)
          .then(user => {
            console.log(user[0])
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      } else {
        res.status(400).json('wrong credentials')
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
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




