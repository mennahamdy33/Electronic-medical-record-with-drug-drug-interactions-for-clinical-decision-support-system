const express = require("express");
const router = express.Router();

const db = require('../db/config')

router.get('/secretaryProfile/:id', (req, res) => {

    const  id  = req.params.id;
    db('clinics')
    .join('secretary_works_in', 'clinics.clinic_id', 'secretary_works_in.clinic_id')
    .select('clinics.clinic_id','clinics.clinic_name', 'clinics.address').where('secretary_id', id)

    // db.select('clinic_id').from('doctor_works_in').where('doctor_id', id)
      .then(clinics => {
          console.log(clinics)
        if ((clinics.length) ) {
           
            res.send(clinics)
        
        } else {
          res.json([])
         
        }
      })
  
      .catch(err => console.log(err))
     
  })
  
module.exports = router;  