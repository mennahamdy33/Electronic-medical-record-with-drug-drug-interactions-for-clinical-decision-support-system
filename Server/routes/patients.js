var express = require('express');
var router = express.Router();
const knex = require('../db/config')

/* GET ALL . */
router.get('/', function (req, res, next) {
    res.send('to be implemented')
});

// GET ONE
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    knex.from('patients')
        .where('patient_id', id)
        .first()
        .then((results) => {
            res.json(results);
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

});
// GET MEDICATIONS
router.get('/:id/medications', function (req, res, next) {
    const id = req.params.id;
    knex.from('drug_products')
        .whereIn('id', knex('medications')
            .select('product_id')
            .where('patient_id', id)
        )
        .then((results) => {
            res.send(results);
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

});
// POST CHECK INTERACTIONS
router.post('/:id/check_interactions', async function (req, res, next) {
    const id = req.params.id;
    const page = req.query.inter_page;
    let drugs = [];
    let medications = [];
    drugs = req.body.drugs;
    //check if there are drugs
    (drugs && drugs.length < 1) ? res.send('there are no drugs provided') : null;

    //get patient medications
    await knex.from('drug_products')
        .whereIn('id', knex('medications')
            .select('product_id')
            .where('patient_id', id)
        ).then((results) => {
            medications = results;
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

    //map to parentkey only
    drugs = drugs.map((value, index) => { return value.parent_key });
    //map to parentkey only
    medications = medications.map((value, index) => { return value.parent_key });

    //get interesctions table 
    knex.from('drug_drug_interactions')
        .whereIn('drugbank_id', drugs)
        .whereIn('parent_key', medications)
        .paginate({ perPage: 50, currentPage: page })
        .then((results) => {
            res.json(results);
        })
        .catch((err) => { res.status(500).send('server error please come back later'); throw err })

});


module.exports = router;