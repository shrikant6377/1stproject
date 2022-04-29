
const authorModel = require("../models/authorModel");
const blogModel = require("../models/blogModel");



const createBlog = async function (req, res) {
  try {
      let data = req.body;
      //let data1 = req.body.authorId;
      //let savedata = await authorModel.findById(data1);
      // if (!savedata) {
      //     return res.status(400).send({ status: false, msg: 'No such Author is Present On tha AuthorId' });
      // } else {
      //     let savedata1 = await blogModel.create(data);
      //     return res.status(201).send({ status: true, data: savedata1 });
      // }
      let blogCreated = await blogModel.create(data);

    if (data.isPublished === true) {
      let mainBlog = await blogModel.findOneAndUpdate(
        { _id: blogCreated._id },
        { $set: { publishedAt: Date.now() } },
        { new: true, upsert: true }
      );
      return res.status(201).send({ status: true, data: mainBlog })
    } else {
      return res.status(201).send({ status: true, data: blogCreated })
    }

  }
  catch (err) {
      return res.status(500).send({ status: false, msg: err.message });
  }}


const getBlogs = async function (req, res) {
  try {
    let collection = await blogModel.find({
      isPublished: true,
      isDeleted: false,
    });
    // res.status(200).send({ status: true, msg: collection })

    if (!collection) {
      res.status(404).send({ status: false, msg: "Blogs Not Found" });
    } else {
      let data = req.query;
      let getByQuery = await blogModel.find(data);
      if (getByQuery.length <= 0) {
        res.status(404).send({ status: false, msg: "Data Not Found" });
      } else {
        res.status(200).send({ status: true, data: getByQuery });
      }
    }
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

const updateBlogs = async function (req, res) {
  try {
    let data1 = req.params.blogId;
    if (Object.keys(data1).length == 0) {
      res.status(400).send({ status: false, msg: "BlogsId Required" });
    }
    let findBlogId = await blogModel.findOne({ data1 });
    console.log(findBlogId);
    // res.send(findBlogId)
    if (!findBlogId) {
      res.status(404).send({ status: false, msg: "Blog Not Found" });
    } else {
      let data = req.body;
      let savedata = await blogModel.findOneAndUpdate(
        { _id: data1 },
        { $set: data },
        { new: true }
      );
      
      savedata.isPublished = true;
      savedata.publishedAt = Date.now();
      savedata.save();
      return res.status(200).send({ status: true, data: savedata });
    }
  } catch (err) {
   return res.status(500).send({ status: false, msg: err.message });
  }
};

const deleteBlogs = async function (req, res) {
  try {
    let data1 = req.params.blogId;

    // if (Object.keys(data1).length == 0) {
    //   res.status(400).send({ status: false, msg: "BlogsId Required" });
    // }

    let deleteBlog = await blogModel.findOneAndUpdate(
      { _id: data1},
      { $set:{isDeleted: true}, deletedAt: Date.now() },
      { new: true }
    );
    if (!deleteBlog)
      return res.status(404).send({
        status: false,
        msg: "block already deleted or not exist",
      });else{

        return res.status(201).send({ status: true, msg: "successfully deleted" });
      }
   

  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

const deleteByQuery = async function (req, res) {
  try {
    const data = req.query;
    console.log(data);

    if (!data)
      return res
        .status(400)
        .send({ error: "Enter Valid AuthorId or Valid Input " });

    const dataforUpdation = { ...data, isDeleted: true, deletedAt: Date.now() };

    const result = await blogModel.updateMany(data, dataforUpdation, {
      new: true,
    });

    if (!result) res.status(404).send({ error: "No Data Found" });

    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.createBlog = createBlog;
module.exports.getBlogs = getBlogs;
module.exports.updateBlogs = updateBlogs;
module.exports.deleteBlogs = deleteBlogs;
module.exports.deleteByQuery = deleteByQuery;
