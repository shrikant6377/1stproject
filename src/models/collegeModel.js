const mongoose=require('mongoose')
const college=new mongoose.Schema({
     name:{
          type:String,
          required:true,
          unique:true},
     fullName:{
          type:String,
          require:true},
     logoLink:{
          type:String,
          require:true},
     isDeleted:{
          type:Boolean,
          default:false}
},
{timestamps:true})
module.exports=mongoose.model("college",college)