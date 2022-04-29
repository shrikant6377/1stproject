const jwt = require("jsonwebtoken");



const Authentication = function (req, res, next) {
  // compare the logged in user's Id and the Id in request
  try {
    let Token = req.headers["x-api-key"];
    console.log(Token);
    if (!Token) {
     return res.status(404).send({ status: false, msg: "token must be required in the header" });
    }
    let decodedToken = jwt.verify(Token, "functionUp");
    console.log(decodedToken);

    if (!decodedToken) {
    return  res.status(400).send({ status: false, msg: "invalid token" });
    }

    const userId= req.body.authorId || req.params.authorId || req.query.authorId
    if(decodedToken.authorId !==userId){
      return res.status(400).send({status:false, msg:"you are not authorised to use"})
    }
    

    // req.authorId = decodedToken.authorId
    next();
  } catch (error) {
   return res.status(500).send({ status: false, msg: error.massage });
  }
};

// // const authorization = function (req, res, next) {
// //   try {
// //     let token = req.headers["x-api-key"];
// //     let decodedToken = jwt.verify(token, "functionUp");

// //     let data2 = decodedToken.authorId;
// //     // let data2 = authorId
// //     console.log(data1);

// //     if ((data1 = req.params.blogId)) {
// //       console.log(data1);
// //       if (data1 !== data2) {
// //         return res
// //           .status(401)
// //           .send({
// //             status: false,
// //             msg: 'Unauthorized "Cannot access Other"s Data',
// //           });
// //       }
// //     } else if ((data1 = req.body.authorId)) {
// //       console.log(data1);
// //       if (data1 !== data2) {
// //         return res
// //           .status(401)
// //           .send({
// //             status: false,
// //             msg: 'Unauthorized "Cannot access Other"s Data',
// //           });
// //       }
// //     } else {
// //       data1 = req.query.userId;
// //       console.log(data1);
// //       if (data1 !== data2) {
// //         return res
// //           .status(401)
// //           .send({
// //             status: false,
// //             msg: 'Unauthorized "Cannot access Other"s Data',
// //           });
// //       }
// //     }

// //     next();
// //   } catch (error) {
// //     res.status(500).send({ status: false, error: error.message });
// //   }
// // };
module.exports = {Authentication };

