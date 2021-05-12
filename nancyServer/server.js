const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

var indexRouter = require('./routes/index');


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routing 
app.use('/', indexRouter);



// starting the server
app.listen(3000, () => {
    console.log('app is running on port 3000');
})




