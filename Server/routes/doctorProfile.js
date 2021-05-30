const express = require("express");
const router = express.Router();

const db = require('../db/config')

router.get('/doctorProfile/:id', (req, res) => {

    const  id  = req.params.id;
    db.select('photo').from('doctors').where('doctor_id', id)
      .then(photo => {
          console.log(photo[0].photo)
        if ((photo.length) && (photo[0].photo != 'null') ) {
           
            res.send(photo)
        
        } else {
          res.json([])
         
        }
      })
      .catch(err => console.log(err))
     
  })
  
module.exports = router;  