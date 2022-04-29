const express = require("express");
const router = express.Router();
const authorContoller = require("../controllers/authorController");
const blogController = require("../controllers/blogController");
const middleware = require("../middleware/auth");

router.post("/authors", authorContoller.createAuthor);

router.get("/getblog", blogController.getBlogs);

router.put(
  "/updateBlogs/:blogId",
  middleware.Authentication,
  blogController.updateBlogs
);
router.delete(
  "/deleteBlogs/:blogId",
  middleware.Authentication,
  blogController.deleteBlogs
);
router.delete("/deleteByQuery", blogController.deleteByQuery);

// phase2
router.post("/authorLogin", authorContoller.authorLogIn);
router.post("/blogs", middleware.Authentication, blogController.createBlog);

module.exports = router;
