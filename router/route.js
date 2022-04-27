const express = require('express');
const router = express.Router();
const authorContoller = require("../controllers/authorController");
const blogController=require("../controllers/blogController")

router.post("/authors", authorContoller.createAuthor);

router.post("/blogs",blogController.createBlog);





module.exports=router;