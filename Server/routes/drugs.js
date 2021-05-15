var express = require('express');
var router = express.Router();
const knex = require('../db/config')

/* GET ALL . */
router.get('/', function (req, res, next) {
    const name = req.query.name;
    const page = req.query.page;
    
    knex.from('drug_products')
        .where('name','like', `${name}%`)
        .paginate({ perPage: 10, currentPage: page })
        .then((results) => {
            if(name==""){
                res.send({data:[]});
            }else{
                res.send(results);
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
            res.send(results);
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

});

module.exports = router;
