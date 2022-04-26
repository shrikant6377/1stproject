const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;
const authorSchema = new mongoose.Schema(
    {
fname:{ 
    type: "string",
    required: true},
 lname:{ 
     type"string",
 }
  title: {string, enum:["Mr", "Mrs", "Miss"]},
   email: "string",
 password: {mandatory}
    }
)
module.exports = mongoose.model(authorSchema,author);