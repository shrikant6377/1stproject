
// const jwt = require("jsonwebtoken")
const authorModel = require("../models/authorModel");

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

// const authorLogIn = async function (req, res) {
//     let data1 = req.body.email;
//     let data2 = req.body.password;
//     let checkData = await authorModel.findOne({ email: data1, password: data2 });
//     if (!checkData) {
//         res.status(404).send({ status: false, msg: 'Invalid Credential' });
//     }
//     else {
//         let geneToken = jwt.sign({ userId: checkData._id.toString() }, "functionUp");;
//         res.status(200).send({ status: true, Token: geneToken });
//     }
// }

// module.exports.authorLogIn=authorLogIn
module.exports.createAuthor=createAuthor