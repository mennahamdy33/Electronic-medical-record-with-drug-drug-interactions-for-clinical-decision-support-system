var express = require('express');
var router = express.Router();

const drugsRouter =require('./drugs');
const interRouter =require('./interactions');


router.use('/drugs', drugsRouter);
router.use('/interactions',interRouter);

module.exports = router;
