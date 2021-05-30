const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors())
// app.use(bodyParser.json());


app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=> {
  res.send(console.log('Hi'));
})

app.use('/', require("./routes/register"));
app.use('/', require("./routes/signin"));
app.use('/', require("./routes/clinics"));
app.use('/', require("./routes/isAuthorized"));
app.use('/', require("./routes/registerPurchase"));
app.use('/', require("./routes/signinPurchase"));
app.use('/', require("./routes/sendcode"));
app.use('/', require("./routes/addClinic"));
app.use('/', require('./routes/index'));

app.use('/', require('./routes/doctorProfile'));

app.use('/', require('./routes/addpatient'));

// starting the server
app.listen(3000, ()=> {
    console.log('app is running on port 3000');
  })




