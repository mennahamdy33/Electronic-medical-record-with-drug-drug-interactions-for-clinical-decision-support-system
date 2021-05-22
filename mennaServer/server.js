const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
var x ;
let med;
let m;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const options = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'what',
        database: 'druguide'
    }
};
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

const knex = require('knex')(options);
app.post('/medications',(req,res)=>{

    x=req.body.x;
    console.log("asd",x);
    });
// app.get('/drugs?name', function (req, res, next) {
//     const name = req.query.name;
//     const page = req.query.page;
//
//     knex.from('drug_products')
//         .where('name','like', `${name}%`)
//         .paginate({ perPage: 10, currentPage: page })
//         .then((results) => {
//             if(name==""){
//                 res.send({data:[]});
//             }else{
//                 res.send(results);
//             }
//         })
//         .catch((err) => { res.status(500).send('server error please come back later'); throw err })
//
// });
//
// app.get('/addpatient',(req,res)=>{
//
//
//     knex.from('drug_products').select("name").where('name','like', `${x}%`).limit(100)
//         .then((rows) => {
//             res.send(Object.values(rows));
//         }).catch((err) => { console.log(err);  })
//
// });




app.post('/addpatient', async (req, res) => {

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
            // medication.patient_id =patient_id[0];
            // console.log(med);
            // console.log(medication.patient_id);
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

    //
    //  knex('patients').insert(patient).then(response => {medication.patient_id = response,console.log(medication.patient_id)})
    // .catch((err) => { console.log(err);})

});
//
// app.post('/addmedication', (req, res) => {
//     med = req.body.medications;
//     console.log("addmedication");
//     for (m in med)
//         knex.from('drug_products').select("parent_key").where({name: m })
//             .then((rows) => {
//            medication.product_name = m ;
//            medication.product_id = Object.values(rows) ;
//             }).catch((err) => { console.log(err);  })
//             knex('medications').insert(medication).then(() => console.log(medication))
//                 .catch((err) => {
//                     console.log(err);
//                 });
//
// });
app.listen(PORT,function () {
console.log("listining to port",PORT);

});
