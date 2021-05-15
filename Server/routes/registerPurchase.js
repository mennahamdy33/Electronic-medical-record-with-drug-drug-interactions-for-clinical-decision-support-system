const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/config')

router.post('/registerPurchase', async (req, res) => {

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

module.exports = router;  