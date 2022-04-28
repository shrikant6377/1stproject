const jwt = require("jsonwebtoken");
const authorModel = require("../models/authorModel");
const blogModel= require("../models/blogModel")

const authentication = async function (req, res, next) {
  try {
    let Token = req.headers["x-api-key"];
    console.log(Token);
    if (!Token) {
      res.status(404).send({ status: false, msg: "token must be requred" });
    }
    let decodedToken = await jwt.verify(Token, "functionUp");
    console.log(decodedToken);

    if (!decodedToken) {
      res.status(400).send({ status: false, msg: "invalid token" });
    }
    
    req.authorId = decodedToken.authorId;

    
    next();
  } catch (error) {
    res.status(500).send({ status: false, msg: error.massage });
  }
};
module.exports = { authentication };
