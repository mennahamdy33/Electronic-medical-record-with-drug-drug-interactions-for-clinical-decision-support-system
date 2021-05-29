var express = require('express');
var router = express.Router();
const knex = require('../db/config')

/* GET ALL . */
router.get('/', function (req, res, next) {
    const name = req.query.name;
    const page = req.query.page;
    
    
    knex.from('drug_products')
        .where('name','like', `${name}%`).groupBy('parent_key')

        

        .select('*')
        .paginate({ perPage: 5, currentPage: page })

        .then((results) => {
            console.log(results)
            if(name==""){
                res.json({data:[]});
            }else{
                res.json(results);
              //  console.log(results);
            }
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

});
/* GET PARENT KEY . */
router.get('/parents/:name', function (req, res, next) {
    const name = req.params.name;
    const page = req.query.page;
    
    knex.from('drug_products')
        .where('parent_key',name)
        .select('*')
        .paginate({ perPage: 5, currentPage: page })
        .then((results) => {
            if(name==""){
                res.json({data:[]});
            }else{
                res.json(results);
              //  console.log(results);
            }
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

});

// GET ONE
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    
    knex.from('drug_products')
        .where('id',id)
        .first()
        .then((results) => {
            res.json({drug:results});
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

});

module.exports = router;
