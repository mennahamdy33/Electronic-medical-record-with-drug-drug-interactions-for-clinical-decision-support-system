const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const knex = require('../db/config');
let med=[];
let m;

let patient = [
    {
        first_name: "",
        last_name: "",
        ssn: "",
        phone_number: "",
        gender: "",
        address: "",
        birth_date: ""
    }];


router.post('/addpatient', async (req, res) => {

    patient = [
        {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            ssn: req.body.ssn,
            phone_number: req.body.phoneNumber,
            gender: req.body.gender,
            address: req.body.address,
            birth_date: req.body.birthdate
        }];
    try {
        await knex.transaction (async trx => {
            //Insert into login table
            const patient_id = await trx('patients')
                .insert(patient);
            med = req.body.Medications;
            for (m in med) {
                console.log(m);
                const addmedication = await trx('drug_products').select("parent_key").where({name: med[m] });
                let medication = [
                    {
                        patient_id: patient_id[0],
                        product_id: addmedication[m]["parent_key"],
                        product_name: med[m],
                    }];
                // medication.product_name = m ;
                console.log(addmedication[m]["parent_key"]);
                const add2 = await trx('medications').insert(medication);

            }
        })
    }
    catch (err){
        console.log(err);
        res.status(400).json('Unable to register');
    }

});
            module.exports = router;