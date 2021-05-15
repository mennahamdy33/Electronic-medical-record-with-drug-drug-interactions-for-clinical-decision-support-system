const express = require("express");
const router = express.Router();
const db = require('../db/config')

router.post('/addClinic', (req, res) => {
    const {clinic_name , address , customer_id} = req.body;
    
  
  
    db.insert({
      customer_id: customer_id, clinic_name: clinic_name ,address: address
      })
    .into('clinics')
    .then(()=>{
      res.status(200).json('Success')
  
      
    })
    .catch(err => {
      console.log(err)
      res.status(400).json('unable to send code')
    }
      )
  })

module.exports = router;  