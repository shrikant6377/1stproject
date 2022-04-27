const express = require("express");
const router = express.Router();
const authorContoller = require("../controllers/authorController");
const blogController = require("../controllers/blogController");

router.post("/authors", authorContoller.createAuthor);

router.post("/blogs", blogController.createBlog);
router.get("/getblog", blogController.getBlogs);
router.put("/updateBlogs/:blogId", blogController.updateBlogs);
router.delete("/deleteBlogs/:blogId", blogController.deleteBlogs);
router.delete("/deleteByQuery", blogController.deleteByQuery);

module.exports = router;
