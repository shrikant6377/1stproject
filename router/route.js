const express = require('express');
const router = express.Router();
const authorContoller = require("../controllers/authorController");


router.post("/authors", authorContoller.createAuthor);





module.exports=router;