const express = require("express");
const router = express.Router();

const db = require('../db/config')

router.get('/clinics/:id', (req, res) => {

    const  id  = req.params.id;
    
    // db.select('*').from('clinics')
    db.select('*').from('clinics').where('customer_id', id)
      .then(clinics => {
        if (clinics.length) {
          res.json(clinics)
        } else {
          res.json([])
          // res.status(400).json('Not found')
        }
      })
      .catch(err => console.log(err))
      // .catch(err => res.status(400).json('error getting clinics'))
  })
  
module.exports = router;  