const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/config')


router.post('/register', async (req, res) => {
    const {
      first_name,
      last_name,
      gender,
      national_id,
      phone_number,
      birth_date,
      education,
      speciality,photo,
      address, email, password,proficiency, auth_id , pickedClinics} = req.body;
      
      console.log(photo)
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
            address:address,photo:photo, email: email,
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

module.exports = router;