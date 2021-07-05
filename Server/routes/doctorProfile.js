const express = require("express");
const router = express.Router();

const db = require('../db/config')

router.get('/doctorProfile/:id', (req, res) => {

    const  id  = req.params.id;
    db('clinics')
    .join('doctor_works_in', 'clinics.clinic_id', 'doctor_works_in.clinic_id')
    .select('clinics.clinic_id','clinics.clinic_name', 'clinics.address').where('doctor_id', id)

    // db.select('clinic_id').from('doctor_works_in').where('doctor_id', id)
      .then(clinics => {
          console.log(clinics)
        if ((clinics.length) ) {
           
            res.send(clinics)
        
        } else {
          res.json([])
         
        }
      })
    // db.select('photo').from('doctors').where('doctor_id', id)
    //   .then(photo => {
    //       console.log(photo[0].photo)
    //     if ((photo.length) && (photo[0].photo != 'null') ) {
           
    //         res.send(photo)
        
    //     } else {
    //       res.json([])
         
    //     }
    //   })
      .catch(err => console.log(err))
     
  })
  
module.exports = router;  