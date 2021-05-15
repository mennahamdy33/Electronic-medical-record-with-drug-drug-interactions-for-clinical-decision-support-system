var express = require('express');
var router = express.Router();
const knex = require('../db/config')

/* GET drugs listing. */
router.get('/drug/:id', function (req, res, next) {
    const page = req.query.page;
    const id = req.params.id;
    //get first drug product with id
    knex.from('drug_products')
        .where('id',`${id}`)
        .first()
        .then((row) => {
            // get interactions of it
            knex.from('drug_drug_interactions')
            .where('parent_key',row.parent_key)
            .paginate({ perPage: 20, currentPage: page })
            .then((results)=>{
                res.send(results);
            }
            )
        }).catch((err) => { console.log(err); throw err })

});

module.exports = router;
