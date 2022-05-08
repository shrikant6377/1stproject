const mongoose=require('mongoose')
const student=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    email:{
        type:String,
        require:true,
        unique:true},
    mobile:{
        type:Number,
        reqiured:true,
        unique:true},
    collegeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"college",
        required:true
    },
    isDeleted:{type:Boolean,default:false}
},{timestamps:true})
module.exports=mongoose.model("student",student)