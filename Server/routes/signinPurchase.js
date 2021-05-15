const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/config')

router.post('/signinPurchase', (req, res) => {
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

module.exports = router;  