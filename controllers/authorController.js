
// const jwt = require("jsonwebtoken")
const userModel = require("../models/authorModel");

const createAuthor = async function (req, res) {
    try {
        let data = req.body
        let AuthorCreated = await authorModel.create(data)
        res.status(201).send({ status : true ,data :AuthorCreated, msg: "AuthorCreated succesfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }

}


module.exports.createAuthor=createAuthor