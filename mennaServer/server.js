const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
const cors = require('cors');
var x ;
var i =0;
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

const knex = require('knex')(options);
app.post('/medications',(req,res)=>{

    x=req.body.x;
    console.log(x);
});

app.get('/addpatient',(req,res)=>{
    knex.from('drug_products').select("name").where('name','like', `${x}%`).limit(100)
        .then((rows) => {
            res.send(Object.values(rows));
        }).catch((err) => { console.log(err); throw err })

});
app.post('/addpatient', (req, res) => {

    const patient = [
        {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            ssn: req.body.ssn,
            phone_number: req.body.phoneNumber,
            gender: req.body.gender,
            address: req.body.address,
            birth_date: req.body.birthdate
        }];
knex('patients').insert(patient).then(() => console.log(patient))
    .catch((err) => { console.log(err); throw err })

});

app.listen(PORT,function () {
console.log("listining to port",PORT);

});