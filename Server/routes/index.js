var express = require('express');
var router = express.Router();

const drugsRouter =require('./drugs');
const interRouter =require('./interactions');
const patientsRouter =require('./patients');


router.use('/drugs', drugsRouter);
router.use('/interactions',interRouter);
router.use('/patients',patientsRouter);

module.exports = router;