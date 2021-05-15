const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/config')

router.post('/signin', (req, res) => {
    const {email, password,proficiency} = req.body;
  
    if(proficiency === 'doctor'){
      db.select('email', 'password').from('doctors')
      .where('email', '=', email)
      .then(async (data) => {
        const isValid = await bcrypt.compareSync(password, data[0].password);
        if (isValid) {
          return db.select( 'doctor_id', 'first_name', 'last_name').from('doctors')
            .where('email', '=', email)
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
    }
    else if(proficiency === 'secretary'){
      db.select('email', 'password').from('secretary')
      .where('email', '=', email)
      .then(async (data) => {
        const isValid = await bcrypt.compareSync(password, data[0].password);
        if (isValid) {
          return db.select( 'secretary_id', 'first_name', 'last_name').from('secretary')
            .where('email', '=', email)
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
    }
  
   
  })


module.exports = router;