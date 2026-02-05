const express = require('express');
const router = express.Router();

const collegeController = require('../controller/collegecontroller');   
const logger = require('../middleware/college.middleware');
router.get('/',logger,collegeController.getData);
router.post('/add',logger,collegeController.addData);

module.exports = router;