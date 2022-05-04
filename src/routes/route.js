const express = require('express');
const router = express.Router();
const collegeController=require('../contollers/createColloege')
const interns=require('../contollers/internsControllers')
const getdata=require('../contollers/getController')
router.post('/functionup/colleges',collegeController.createcollege)
router.post('/functionup/interns',interns.interns)
router.get('//functionup/collegeDetails',getdata.getdata)


module.exports = router;