const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const knex = require('../db/config');
let med=[];
let m;

router.post('/addpatient', async (req, res) => {

    let patient = [
        {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            ssn: req.body.ssn,
            phone_number: req.body.phoneNumber,
            gender: req.body.gender,
            address: req.body.address,
            birth_date: req.body.birthdate,


        }];

    var medicalHistory =[{
        patient_id :'',
        major_illnesses: req.body.majorillnesses,
        previous_surgey: req.body.previoussurgery,
        previous_illnessess: req.body.previousillnesses,
        diabetes:  new Boolean(req.body.diabetes === 'yes') ? 1 : 0,
        family_diseases:req.body.familydiseases,
        allergies: req.body.allergies,
        tobacco: new Boolean(req.body.tobacco === 'yes') ? 1 : 0
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
            console.log(patient_id[0]);
            console.log()
            medicalHistory[0].patient_id = patient_id[0];


            const medicalhistory = await trx('medical_history')
                .insert(medicalHistory);

        })
    }
    catch (err){
        console.log(err);
        res.status(400).json('Unable to register');
    }

});
            module.exports = router;